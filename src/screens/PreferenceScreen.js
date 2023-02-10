import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, ScrollView, Image, Platform, TouchableOpacity, Alert } from 'react-native'
import { colors } from '../global/styles'
import {
  Icon,
  CheckBox
} from 'react-native-elements';

import { menuDetailedData } from '../global/Data';
import { collection, getDocs, setDoc, doc } from '@firebase/firestore';
import { auth, db } from '../../firebase/firebase';

function renderFooter({ item_food }) {
  const [qty, setQty] = useState(0);

  const AddtoCart = async () => {
    try {
      const currentUser_items = collection(db, 'Cart/' + auth.currentUser.uid + '/CurrentUser');
      const currentUser_CurrentUser = collection(db, 'Cart/' + auth.currentUser.uid + '/CurrentUser');
      const currentUser_itemsSnapshot = await getDocs(currentUser_items);
      const currentUser_List = currentUser_itemsSnapshot.docs.map(doc => doc.data());
      console.log('====================================');
      console.log(currentUser_List);
      console.log('====================================');
      if (currentUser_CurrentUser == null) {
        //     console.log("currentUser_List1");
        // }
        currentUser_List.map((item) => {
          console.log('====================================');
          console.log(item.name);
          console.log('====================================');
          // let sum_price = 
          while (Boolean(item_food.name == item.name)) {
            console.log(Boolean(item_food.name == item.name))
            console.log((qty + item.qty));
            setDoc(doc(db, "Cart/" + auth.currentUser.uid + "/CurrentUser", item_food.name), {
              img_url: item_food.img_url,
              name: item_food.name,
              price: item_food.price,
              qty: qty + item.qty,
            });
            break
          }
          if (item_food.name != item.name) {
            console.log(Boolean(item_food.name == item.name))
            setDoc(doc(db, "Cart/" + auth.currentUser.uid + "/CurrentUser", item_food.name), {
              img_url: item_food.img_url,
              name: item_food.name,
              color: selectcolor,
              price: item_food.price,
              qty: qty,
            });
          }
        })
      }
      else {
        setDoc(doc(db, "Cart/" + auth.currentUser.uid + "/CurrentUser", item_food.meal), {
          img_url: item_food.image,
          name: item_food.meal,
          price: item_food.price,
          qty: qty,
          sum_bill: sum,
        });
      }
      Alert.alert('Thông báo', "ĐÃ THÊM VÀO GIỎ HÀNG")
      console.log("Document written with ID: ", auth.currentUser.uid);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  function qty_test() {
    return (
      <View style={styles.view14}>
        <View style={styles.view15}>
          <Icon
            name="remove"
            type="material"
            color={colors.black}
            size={25}
            onPress={() => {
              if (qty > 0) {
                setQty(qty - 1)
              }
            }}
          />
        </View>
        <Text style={styles.text9}>{qty}</Text>
        <View style={styles.view16}>
          <Icon
            name="add"
            type="material"
            color={colors.black}
            size={25}
            onPress={() => setQty(qty + 1)}
          />
        </View>
      </View>
    )
  }
  const sum = item_food.price * qty
  return (
    <>
      {qty_test()}

      <View style={styles.view17}>
        <View style={styles.view18}>
          <TouchableOpacity
            onPress={() => AddtoCart()}
          >
            <Text style={styles.text10}>Thêm vào giỏ hàng - {sum.toFixed(2)} $</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
  // }
}

export default function PreferenceScreen({ route }) {
  const [qty, setQty] = useState(0);
  const index = route.params.id_test

  const [preference, setpreference] = useState(menuDetailedData[index].preferenceData)
  const required = menuDetailedData[index].required
  const minimum_quantity = menuDetailedData[index].minimum_quatity
  const [counter, setcounter] = useState(menuDetailedData[index].counter)


  const { meal, details, price, image } = menuDetailedData[index];;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>

          <Image
            style={styles.backgroundImage}
            source={{ uri: image }}
          />
        </View>

        <View style={styles.view12}>
          <Icon
            name="arrow-left"
            type="material-community"
            color={colors.cardbackground}
            size={30}
            onPress={() => navigation.goBack()}
          />
        </View>

        <View style={styles.view1}>
          <Text style={styles.text1}>{meal}</Text>
          <Text style={styles.text2}>{details}</Text>
          <Text style={styles.textPrice}>${price}</Text>
        </View>

        <View>
          {preference.map(item =>
            <View key={item.id}>
              <View style={styles.view7}>
                <Text style={styles.text8}>{menuDetailedData[index].preferenceTitle[preference.indexOf(item)]}</Text>
                {required[preference.indexOf(item)] &&
                  <View style={styles.view9}>
                    <Text style={styles.text7}>{minimum_quantity[preference.indexOf(item)]} REQUIRED</Text>
                  </View>
                }
              </View>
              <View style={styles.view10}>
                {item.map(items =>
                  <TouchableOpacity
                    key={items.id}
                    onPress={() => {
                      const id = preference.indexOf(item)
                      if (minimum_quantity[id] !== null) {
                        const check = item.filter(items => items.checked ? items : null);
                        preference[id].forEach(i => {
                          if (i.id === items.id) {
                            if (check.length < minimum_quantity[id]) {
                              i.checked = true
                            }
                            else {
                              i.checked = false
                            }
                          }
                        })
                        // counter[id] = counter[i] + 1
                        // setpreference(preference[id])
                      }
                      else {
                        preference[id].forEach(i => {
                          if (i.id === items.id) {
                            i.checked = !i.checked
                          }
                        })
                        // setpreference(preference[id])
                      }
                    }}
                  >
                    <View style={styles.view4}>
                      <View style={styles.view19}>
                        <View style={styles.view6}>
                          <CheckBox
                            center
                            checkedIcon="check-square-o"
                            uncheckedIcon="square-o"
                            checked={items.checked}
                            checkedColor={colors.buttons}
                          />
                          <Text style={{ color: colors.grey2, marginLeft: -10 }}>{items.name}</Text>
                        </View>
                        <Text style={styles.text6}>${items.price.toFixed(2)}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              </View>

            </View>
          )

          }
        </View>
      </ScrollView>

      <View style={styles.view13}>
        <Text style={styles.text11}>Quantity</Text>
      </View>

      {renderFooter({
        item_food: menuDetailedData[index],
        qty
      }
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fill: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  header: {
    width: "100%",
    backgroundColor: colors.buttons,
    overflow: 'hidden',
    height: 300//HEADER_MAX_HEIGHT,
  },
  backgroundImage: {
    width: "100%", //null,
    height: 300, //HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  bar: {
    backgroundColor: 'transparent',
    marginTop: Platform.OS === 'ios' ? 28 : 38,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: "bold",
    marginLeft: 40
  },
  scrollViewContent: {
    // iOS uses content inset, which acts like padding.
    //paddingTop: Platform.OS !== 'ios' ?
    //HEADER_MAX_HEIGHT : 0,
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  view1: {
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10
  },

  text1: {
    fontSize: 15,
    color: colors.grey1,
    fontWeight: "bold"
  },

  text2: {
    fontSize: 14,
    color: colors.grey2,
    marginTop: 5
  },
  view2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  text3: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.grey1,
    marginLeft: 10
  },

  viw3: {
    borderWidth: 3,
    borderColor: colors.grey5,
    borderRadius: 5,
    marginRight: 10
  },

  text4: {
    fontWeight: "bold",
    color: colors.grey3,
    padding: 5
  },

  view4: {
    backgroundColor: "white",
    marginBottom: 10
  },
  view5: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 10
  },
  view6: {
    flexDirection: "row",
    alignItems: "center"
  },
  text5: { fontWeight: "bold", marginLeft: -10 },
  text6: { fontSize: 16, fontWeight: "bold", },
  textPrice: { fontSize: 18, fontWeight: "bold", alignItems: "center" },
  view7: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  text8: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.grey1,
    marginLeft: 10
  },

  view9: {
    borderWidth: 3,
    borderColor: colors.grey5,
    borderRadius: 5,
    marginRight: 10
  },

  text7: {
    fontWeight: "bold",
    color: colors.grey3,
    padding: 5
  },

  view10: {
    backgroundColor: "white",
    marginBottom: 10
  },

  view11: {
    flexDirection: "row",
    alignItems: "center",
  },

  view12: {
    position: "absolute",
    top: 55,
    left: 15
  },

  view13: {
    paddingBottom: 0,
    marginTop: 5,
  },

  text11: {
    paddingLeft: 10,
    fontWeight: "bold",
    fontSize: 18,
    color: colors.grey3
  },

  view14: {
    flexDirection: "row",
    backgroundColor: colors.cardbackground,
    paddingVertical: 5, marginBottom: 0,
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 5
  },

  view15: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.lightgreen,
    alignItems: "center",
    justifyContent: "center"
  },

  text9: {
    fontWeight: "bold",
    fontSize: 18,
  },
  view16: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.lightgreen,
    alignItems: "center",
    justifyContent: "center"
  },

  view17: {
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.cardbackground,
    marginTop: -5
  },

  view18: {
    backgroundColor: colors.buttons,
    alignItems: "center",
    paddingVertical: 5,
    marginBottom: 0,
    width: 320,
    borderRadius: 12
  },

  text10: {
    padding: 10,
    fontWeight: "bold",
    fontSize: 17,
    alignItems: "center",
  },

  view19: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 10
  }

})