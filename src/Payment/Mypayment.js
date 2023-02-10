import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SwipeListView } from 'react-native-swipe-list-view'
import TextButton from '../components/TextButton'
import IconButton from '../components/IconButton'
import StepperInput from '../components/StepperInput'
import CardItem from './CardItem'
import { COLORS, dummyData, FONTS, icons, SIZES } from '../../constants'
import { Divider } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { collection, doc, setDoc, getDocs, deleteDoc, addDoc } from 'firebase/firestore'
import { auth, db } from '../../firebase/firebase'

export default function Mypayment({ navigation, route }) {

    const [mycartlist, setCartList] = useState([])
    const [total_price, settotal_price] = useState(0)
    const [shippingFee, setShippingFee] = useState(0)
    const [total, setTotal] = useState(0)
    let sum_total = 0
    let key = 0
    const GetData = async () => {
        const currentUser_items = collection(db, 'Cart/' + auth.currentUser.uid + '/CurrentUser');
        const currentUser_itemsSnapshot = await getDocs(currentUser_items);
        const currentUser_List = currentUser_itemsSnapshot.docs.map(doc => doc.data());
        setCartList(currentUser_List);
        console.log(currentUser_List);
        currentUser_List.map((item, indx) => {
            key = indx
            sum_total = sum_total + (item.price * item.qty)
            settotal_price(sum_total)
            setTotal(sum_total + shippingFee)
        })
    }
    useEffect(() => {
        GetData()
    }, [])

    const [selectCard, setSelectCard] = useState(null)
    function renderDeliveryAddr() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding
                }}
            >
                <Text style={{ ...FONTS.h3 }}>Địa chỉ </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: SIZES.radius,
                        paddingVertical: SIZES.radius,
                        paddingHorizontal: SIZES.padding,
                        borderWidth: 2,
                        borderRadius: SIZES.radius,
                        borderColor: COLORS.lightGray2,
                        backgroundColor: COLORS.white
                    }}
                >
                    <Image
                        source={icons.location1}
                        style={{
                            width: 40,
                            height: 40
                        }}
                    />
                    <Text
                        style={{
                            marginLeft: SIZES.radius,
                            width: "80%",
                            ...FONTS.body4
                        }}
                    >470 Trần Đại Nghĩa, Ngũ Hành Sơn , Đà Nẵng</Text>
                </View>
            </View>
        )
    }

    const FooterTotal = ({ subTotal, shippingFee, total, onPress }) => {
        return (
            <View
                style={{
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    backgroundColor: COLORS.lightGray2,
                }}
            >
                <View
                    style={{
                        marginLeft: SIZES.padding / 2,
                        marginRight: SIZES.padding / 2,
                        height: 50
                    }}
                >

                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: SIZES.padding
                        }}
                    >
                        <Text style={{ flex: 1, ...FONTS.body3 }}>TỔNG</Text>
                        <Text style={{ ...FONTS.h3 }}>{total.toFixed(0)}.000đ</Text>
                    </View>
                </View>
                <View
                    style={{
                        alignItems: 'center'
                    }}
                >
                    {/* <TextButton
                        label={"Thanh Toán"}
                        disabel={false}
                        buttonContainerStyle={{
                            height: 40,
                            width: 300,
                            alignItems: 'center',
                            marginTop: SIZES.padding,
                            marginBottom: SIZES.padding,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.primary
                        }}
                        onPress={onPress}
                    /> */}
                </View>

            </View>
        )
    }

    const AddtoCart = async (item_food) => {
        try {
            await addDoc(collection(db, "Cart/" + auth.currentUser.uid + "/OrderUser"), {
                item: item_food
            });
            item_food.map((item) => {

                deleteDoc(doc(db, "Cart/" + auth.currentUser.uid + "/CurrentUser", item.name));
            })
            console.log("Document written with ID: ", auth.currentUser.uid);
            Alert.alert("Đặt hàng thành công")
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    function renderMypayment() {
        return (
            <View>
                {dummyData.myCards.map((item, indx) => {
                    return (
                        <CardItem
                            key={`MyCard-${item.id}`}
                            item={item}
                            isSelected={`${selectCard?.key}-${selectCard?.id}` == `MyCard-${item.id}`}
                            onPress={() => setSelectCard({ ...item, key: "MyCard" })}
                        />
                    )
                })

                }
            </View>
        )
    }
    function renderAddNewCard() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding
                }}
            >
                <Text style={{ ...FONTS.h4 }}>Thêm phương thức thanh toán mới</Text>
                {dummyData.allCards.map((item, indx) => {
                    return (
                        <CardItem
                            key={`NewCard-${item.id}`}
                            item={item}
                            isSelected={`${selectCard?.key}-${selectCard?.id}` == `NewCard-${item.id}`}
                            onPress={() => setSelectCard({ ...item, key: "NewCard" })}
                        />
                    )
                })}
            </View>
        )
    }
    function renderFooter() {
        return (
            <View
                style={{
                    paddingTop: SIZES.radius,
                    paddingBottom: SIZES.radius,
                    paddingHorizontal: SIZES.padding
                }}
            >
                <TextButton
                    disabel={selectCard == null}
                    buttonContainerStyle={{
                        height: 60,
                        borderRadius: SIZES.padding,
                        backgroundColor: selectCard == null ? COLORS.gray : COLORS.primary
                    }}
                    label={selectCard?.key == "NewCard" ? "Thêm phương thức mới" : "Đặt hàng"}
                    onPress={() => { AddtoCart(mycartlist) }}
                />
            </View>
        )
    }

    const QTYHandler = async (list, status) => {
        if (status == "plus") {
            await setDoc(doc(db, "Cart/" + auth.currentUser.uid + "/CurrentUser", list.name), {
                img_url: list.img_url,
                name: list.name,
                price: list.price,
                qty: list.qty + 1,
            });
        }
        else if (status == "minus") {
            await setDoc(doc(db, "Cart/" + auth.currentUser.uid + "/CurrentUser", list.name), {
                img_url: list.img_url,
                name: list.name,
                price: list.price,
                qty: list.qty - 1,
            });
        }
        else if (status == "delete") {

            await deleteDoc(doc(db, "Cart/" + auth.currentUser.uid + "/CurrentUser", list.name));
            settotal_price(sum_total - list.price)
            setTotal(settotal_price)

        }

        GetData();
    }
    function renderCartList() {
        return (
            <SwipeListView
                data={mycartlist}
                contentContainerStyle={{
                    marginTop: SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: SIZES.padding * 2,
                }}
                disableRightSwipe={true}
                rightOpenValue={-75}
                renderItem={(data, idx) =>
                    <View
                        style={{
                            height: 110,
                            backgroundColor: COLORS.lightGray2,
                            ...styles.cartItemContainer
                        }}
                        key={idx}
                    >
                        <View
                            style={{
                                width: 90,
                                height: 90,
                                marginLeft: -10
                            }}
                        >
                            <Image
                                source={{ uri: data.item.img_url }}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    position: 'absolute',
                                    top: 10,
                                    borderRadius: SIZES.radius,
                                }}
                            />

                        </View>

                        <View
                            style={{
                                flex: 1,
                                marginLeft: SIZES.padding
                            }}
                        >
                            <Text
                                style={{
                                    ...FONTS.body3
                                }}
                            > {data.item.name}</Text>
                            <Text
                                style={{ color: COLORS.gray2, ...FONTS.h4 }}
                            > {data.item.price.toFixed(1)}$</Text>
                            <Text
                                style={{ color: COLORS.primary, ...FONTS.h4 }}
                            >
                                {data.item.price * data.item.qty}$
                            </Text>
                        </View>
                        <StepperInput
                            containerStyle={{
                                height: 50,
                                width: 100,
                                backgroundColor: COLORS.white
                            }}
                            value={data.item.qty}
                            onAdd={() => {
                                QTYHandler(data.item, "plus")
                            }}
                            onMinus={async () => {
                                QTYHandler(data.item, "minus")
                            }}
                        />

                    </View>
                }

                renderHiddenItem={(data, ind) => (
                    <IconButton
                        containerStyle={{
                            flex: 1,
                            justifyContent: 'flex-end',
                            backgroundColor: COLORS.primary,
                            ...styles.cartItemContainer
                        }}
                        key={ind}
                        icon={icons.delete_icon}
                        iconStyle={{
                            marginRight: 10

                        }}
                        onPress={() => {
                            QTYHandler(data.item, "delete")
                        }}
                    />
                )}
            />
        )
    }

    return (
        <SafeAreaView
            style={{
                backgroundColor: "#ffffff",
                flex: 1,
                paddingTop: 20,
            }}
        >
            {renderCartList()}
            <KeyboardAwareScrollView
                keyboardDismissMode='on-drag'
                extraScrollHeight={-200}
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: 20
                }}
            >
                {/* {renderAddNewCard()} */}
                {renderDeliveryAddr()}
                {renderMypayment()}
            </KeyboardAwareScrollView>


            <FooterTotal
                subTotal={total_price}
                shippingFee={shippingFee}
                total={total}
            // onPress={() => {
            //     AddtoCart(mycartlist)
            //     navigation.navigate("Success")
            // }
            // }
            />
            {renderFooter()}
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    cartItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.radius,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius
    }
})