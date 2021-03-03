import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_0_899} />
      <View style={styles.View_0_900}>
        <Text style={styles.Text_0_900}>286</Text>
      </View>
      <View style={styles.View_0_901}>
        <View style={styles.View_0_902} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e8a/b50f/8a19a4a672ba1562e5254db264f43493"
          }}
          style={styles.ImageBackground_0_903}
        />
        <View style={styles.View_0_904}>
          <Text style={styles.Text_0_904}>Andrea</Text>
        </View>
        <View style={styles.View_0_905}>
          <Text style={styles.Text_0_905}>Ruggeri</Text>
        </View>
      </View>
      <View style={styles.View_0_906}>
        <View style={styles.View_0_907} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f713/ca8a/febed84e43831ccfe21ad10c40153761"
          }}
          style={styles.ImageBackground_0_908}
        />
        <View style={styles.View_0_909}>
          <Text style={styles.Text_0_909}>Christian</Text>
        </View>
        <View style={styles.View_0_910}>
          <Text style={styles.Text_0_910}>Bale</Text>
        </View>
      </View>
      <View style={styles.View_0_911}>
        <View style={styles.View_0_912} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e90/fc82/db327732e0f6c9668a5e085ec7f3f3a0"
          }}
          style={styles.ImageBackground_0_913}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c844/c02b/32c6496b26e97f595ed9c845bbbec83e"
          }}
          style={styles.ImageBackground_0_914}
        />
        <View style={styles.View_0_917}>
          <Text style={styles.Text_0_917}>Denis</Text>
        </View>
        <View style={styles.View_0_918}>
          <Text style={styles.Text_0_918}>Abdullin</Text>
        </View>
      </View>
      <View style={styles.View_0_919}>
        <View style={styles.View_0_920} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f729/9197/b4557e65bbe385a43ba06d955fb8c230"
          }}
          style={styles.ImageBackground_0_921}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c844/c02b/32c6496b26e97f595ed9c845bbbec83e"
          }}
          style={styles.ImageBackground_0_922}
        />
        <View style={styles.View_0_925}>
          <Text style={styles.Text_0_925}>Wesley</Text>
        </View>
        <View style={styles.View_0_926}>
          <Text style={styles.Text_0_926}>Ross</Text>
        </View>
      </View>
      <View style={styles.View_0_927}>
        <View style={styles.View_0_928} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2dbe/1987/12e459bcf07629e72615fea3110d64a7"
          }}
          style={styles.ImageBackground_0_929}
        />
        <View style={styles.View_0_930}>
          <Text style={styles.Text_0_930}>Dollie</Text>
        </View>
        <View style={styles.View_0_931}>
          <Text style={styles.Text_0_931}>Hart</Text>
        </View>
      </View>
      <View style={styles.View_0_932}>
        <View style={styles.View_0_933} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c264/829b/c172a96bb102af7924b26aa3ac0c7ad8"
          }}
          style={styles.ImageBackground_0_934}
        />
        <View style={styles.View_0_935}>
          <Text style={styles.Text_0_935}>Logan</Text>
        </View>
        <View style={styles.View_0_936}>
          <Text style={styles.Text_0_936}>Norton</Text>
        </View>
      </View>
      <View style={styles.View_0_937}>
        <View style={styles.View_0_938} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c498/93ee/215a54ba34dcdc02aa4fb7ac4478b9b5"
          }}
          style={styles.ImageBackground_0_939}
        />
        <View style={styles.View_0_940}>
          <Text style={styles.Text_0_940}>Andrea</Text>
        </View>
        <View style={styles.View_0_941}>
          <Text style={styles.Text_0_941}>Ruggeri</Text>
        </View>
      </View>
      <View style={styles.View_0_942}>
        <View style={styles.View_0_943} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0ee/a987/20bc81c93d2aaaa65d0a701f534b3e5b"
          }}
          style={styles.ImageBackground_0_944}
        />
        <View style={styles.View_0_945}>
          <Text style={styles.Text_0_945}>Christian</Text>
        </View>
        <View style={styles.View_0_946}>
          <Text style={styles.Text_0_946}>Bale</Text>
        </View>
      </View>
      <View style={styles.View_0_947}>
        <View style={styles.View_0_948} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b93/366a/d273aa93f906d3125128288df23cd7af"
          }}
          style={styles.ImageBackground_0_949}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c844/c02b/32c6496b26e97f595ed9c845bbbec83e"
          }}
          style={styles.ImageBackground_0_950}
        />
        <View style={styles.View_0_953}>
          <Text style={styles.Text_0_953}>Denis</Text>
        </View>
        <View style={styles.View_0_954}>
          <Text style={styles.Text_0_954}>Abdullin</Text>
        </View>
      </View>
      <View style={styles.View_0_955}>
        <View style={styles.View_0_956} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/126f/8e13/96b946afcb52eb3915490db6786618d4"
          }}
          style={styles.ImageBackground_0_957}
        />
        <View style={styles.View_0_958}>
          <Text style={styles.Text_0_958}>Darrell</Text>
        </View>
        <View style={styles.View_0_959}>
          <Text style={styles.Text_0_959}>Gill</Text>
        </View>
      </View>
      <View style={styles.View_0_960}>
        <View style={styles.View_0_961} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d98c/baff/386585cd1976faca5036a79dad7ebcbe"
          }}
          style={styles.ImageBackground_0_962}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c844/c02b/32c6496b26e97f595ed9c845bbbec83e"
          }}
          style={styles.ImageBackground_0_963}
        />
        <View style={styles.View_0_966}>
          <Text style={styles.Text_0_966}>Landon</Text>
        </View>
        <View style={styles.View_0_967}>
          <Text style={styles.Text_0_967}>Johnson</Text>
        </View>
      </View>
      <View style={styles.View_0_968}>
        <View style={styles.View_0_969} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11ff/547f/b39959378e08e5b6e211a13c40ae8a06"
          }}
          style={styles.ImageBackground_0_970}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c844/c02b/32c6496b26e97f595ed9c845bbbec83e"
          }}
          style={styles.ImageBackground_0_971}
        />
        <View style={styles.View_0_974}>
          <Text style={styles.Text_0_974}>Helena</Text>
        </View>
        <View style={styles.View_0_975}>
          <Text style={styles.Text_0_975}>Barnes</Text>
        </View>
      </View>
      <View style={styles.View_0_976}>
        <Text style={styles.Text_0_976}>286</Text>
      </View>
      <View style={styles.View_0_977}>
        <Text style={styles.Text_0_977}>Friends</Text>
      </View>
      <View style={styles.View_0_978}>
        <View style={styles.View_0_979} />
        <View style={styles.View_0_980}>
          <View style={styles.View_I0_980_0_4948} />
          <View style={styles.View_I0_980_0_4949} />
          <View style={styles.View_I0_980_0_4950}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f3b/e2fe/6ea0c2a3f45b57a1b0f3679d7e6702a4"
              }}
              style={styles.ImageBackground_I0_980_0_4950_0_5395}
            />
            <View style={styles.View_I0_980_0_4950_0_5397}>
              <View style={styles.View_I0_980_0_4950_0_5397_0_5697} />
            </View>
          </View>
          <View style={styles.View_I0_980_0_4951}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12f6/e5e2/20fe1fe0937b0030ec7cb15d1df5ee51"
              }}
              style={styles.ImageBackground_I0_980_0_4951_0_5229}
            />
            <View style={styles.View_I0_980_0_4951_0_5230}>
              <View style={styles.View_I0_980_0_4951_0_5230_0_4963} />
            </View>
          </View>
          <View style={styles.View_I0_980_0_4952}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71ed/97a1/da893e6a43849485a8ce320bd7c525c6"
              }}
              style={styles.ImageBackground_I0_980_0_4952_0_5111}
            />
            <View style={styles.View_I0_980_0_4952_0_5114}>
              <View style={styles.View_I0_980_0_4952_0_5114_0_4963} />
            </View>
          </View>
          <View style={styles.View_I0_980_0_4953}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c6d/0f78/2d571228c3f320769abb8100ec06f8d1"
              }}
              style={styles.ImageBackground_I0_980_0_4953_0_5541}
            />
            <View style={styles.View_I0_980_0_4953_0_5542}>
              <View style={styles.View_I0_980_0_4953_0_5542_0_4963} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_981}>
        <View style={styles.View_I0_981_0_5763} />
        <View style={styles.View_I0_981_0_5764}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae93/cb31/6761f7b5bc672720fd4048f6097ef73e"
            }}
            style={styles.ImageBackground_I0_981_0_5764_0_5073}
          />
          <View style={styles.View_I0_981_0_5764_0_5074}>
            <View style={styles.View_I0_981_0_5764_0_5074_0_4963} />
          </View>
        </View>
        <View style={styles.View_I0_981_0_5766}>
          <Text style={styles.Text_I0_981_0_5766}> </Text>
        </View>
        <View style={styles.View_I0_981_0_5768}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/356f/d3a4/54158a0a2323fa83fa7cf77c2dcb2103"
            }}
            style={styles.ImageBackground_I0_981_0_5768_0_5265}
          />
          <View style={styles.View_I0_981_0_5768_0_5266}>
            <View style={styles.View_I0_981_0_5768_0_5266_0_4963} />
          </View>
        </View>
      </View>
      <View style={styles.View_0_982}>
        <View style={styles.View_I0_982_0_5913} />
      </View>
      <View style={styles.View_0_983}>
        <View style={styles.View_I0_983_0_5883}>
          <View style={styles.View_I0_983_0_5884} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
            }}
            style={styles.ImageBackground_I0_983_0_5885}
          />
          <View style={styles.View_I0_983_0_5886} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
          }}
          style={styles.ImageBackground_I0_983_0_5889}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
          }}
          style={styles.ImageBackground_I0_983_0_5893}
        />
        <View style={styles.View_I0_983_0_5896}>
          <Text style={styles.Text_I0_983_0_5896}>9:41</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_899: {
    flexGrow: 1,
    width: 375,
    height: 812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_900: {
    width: 301,
    minWidth: 301,
    minHeight: 253,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 206,
    top: -25
  },
  Text_0_900: {
    color: "rgba(241, 248, 252, 1)",
    fontSize: 202,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_901: {
    width: 98,
    minWidth: 98,
    height: 141,
    minHeight: 141,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 257,
    top: 626
  },
  View_0_902: {
    width: 98,
    height: 141,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_0_903: {
    width: 58,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 20
  },
  View_0_904: {
    width: 63,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 92
  },
  Text_0_904: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_905: {
    width: 63,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 107
  },
  Text_0_905: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_906: {
    width: 98,
    height: 141,
    minHeight: 141,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 139,
    top: 626
  },
  View_0_907: {
    width: 98,
    height: 141,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_0_908: {
    width: 58,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 20
  },
  View_0_909: {
    width: 63,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 92
  },
  Text_0_909: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_910: {
    width: 63,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 107
  },
  Text_0_910: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_911: {
    width: 98,
    minWidth: 98,
    height: 141,
    minHeight: 141,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 626
  },
  View_0_912: {
    width: 98,
    height: 141,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_0_913: {
    width: 58,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 20
  },
  ImageBackground_0_914: {
    width: 13,
    height: 13,
    top: 63,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 63
  },
  View_0_917: {
    width: 63,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 92
  },
  Text_0_917: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_918: {
    width: 63,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 107
  },
  Text_0_918: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_919: {
    width: 98,
    minWidth: 98,
    height: 141,
    minHeight: 141,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 257,
    top: 485
  },
  View_0_920: {
    width: 98,
    height: 141,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_0_921: {
    width: 58,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 20
  },
  ImageBackground_0_922: {
    width: 13,
    height: 13,
    top: 63,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 63
  },
  View_0_925: {
    width: 63,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 92
  },
  Text_0_925: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_926: {
    width: 63,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 107
  },
  Text_0_926: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_927: {
    width: 98,
    height: 141,
    minHeight: 141,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 139,
    top: 485
  },
  View_0_928: {
    width: 98,
    height: 141,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_0_929: {
    width: 58,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 20
  },
  View_0_930: {
    width: 63,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 92
  },
  Text_0_930: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_931: {
    width: 63,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 107
  },
  Text_0_931: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_932: {
    width: 98,
    minWidth: 98,
    height: 141,
    minHeight: 141,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 485
  },
  View_0_933: {
    width: 98,
    height: 141,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_0_934: {
    width: 58,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 20
  },
  View_0_935: {
    width: 63,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 92
  },
  Text_0_935: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_936: {
    width: 63,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 107
  },
  Text_0_936: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_937: {
    width: 98,
    minWidth: 98,
    height: 141,
    minHeight: 141,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 257,
    top: 344
  },
  View_0_938: {
    width: 98,
    height: 141,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_0_939: {
    width: 58,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 20
  },
  View_0_940: {
    width: 63,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 92
  },
  Text_0_940: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_941: {
    width: 63,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 107
  },
  Text_0_941: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_942: {
    width: 98,
    height: 141,
    minHeight: 141,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 139,
    top: 344
  },
  View_0_943: {
    width: 98,
    height: 141,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_0_944: {
    width: 58,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 20
  },
  View_0_945: {
    width: 63,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 92
  },
  Text_0_945: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_946: {
    width: 63,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 107
  },
  Text_0_946: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_947: {
    width: 98,
    minWidth: 98,
    height: 141,
    minHeight: 141,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 344
  },
  View_0_948: {
    width: 98,
    height: 141,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_0_949: {
    width: 58,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 20
  },
  ImageBackground_0_950: {
    width: 13,
    height: 13,
    top: 63,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 63
  },
  View_0_953: {
    width: 63,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 92
  },
  Text_0_953: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_954: {
    width: 63,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 107
  },
  Text_0_954: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_955: {
    width: 98,
    minWidth: 98,
    height: 141,
    minHeight: 141,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 257,
    top: 203
  },
  View_0_956: {
    width: 98,
    height: 141,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_0_957: {
    width: 58,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 20
  },
  View_0_958: {
    width: 63,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 92
  },
  Text_0_958: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_959: {
    width: 63,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 107
  },
  Text_0_959: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_960: {
    width: 98,
    height: 141,
    minHeight: 141,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 139,
    top: 203
  },
  View_0_961: {
    width: 98,
    height: 141,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_0_962: {
    width: 58,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 20
  },
  ImageBackground_0_963: {
    width: 13,
    height: 13,
    top: 63,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 63
  },
  View_0_966: {
    width: 63,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 92
  },
  Text_0_966: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_967: {
    width: 63,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 107
  },
  Text_0_967: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_968: {
    width: 98,
    minWidth: 98,
    height: 141,
    minHeight: 141,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 203
  },
  View_0_969: {
    width: 98,
    height: 141,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_0_970: {
    width: 58,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 20
  },
  ImageBackground_0_971: {
    width: 13,
    height: 13,
    top: 63,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 63
  },
  View_0_974: {
    width: 63,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 92
  },
  Text_0_974: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_975: {
    width: 63,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 107
  },
  Text_0_975: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_976: {
    width: 29,
    minWidth: 29,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 149,
    top: 147
  },
  Text_0_976: {
    color: "rgba(205, 205, 215, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_977: {
    width: 99,
    minWidth: 99,
    minHeight: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 136
  },
  Text_0_977: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 31,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_978: {
    flexGrow: 1,
    width: 375,
    height: 74,
    minHeight: 74,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 738
  },
  View_0_979: {
    width: 375,
    height: 74,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_980: {
    flexGrow: 1,
    width: 375,
    height: 54,
    minHeight: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_980_0_4948: {
    flexGrow: 1,
    width: 375,
    height: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I0_980_0_4949: {
    flexGrow: 1,
    width: 375,
    height: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(241, 243, 248, 1)"
  },
  View_I0_980_0_4950: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 315,
    top: 17,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_980_0_4950_0_5395: {
    flexGrow: 1,
    width: 16.923076629638672,
    height: 16.923076629638672,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.53857421875,
    top: 1.5384521484375
  },
  View_I0_980_0_4950_0_5397: {
    flexGrow: 1,
    width: 16.923076629638672,
    height: 16.923076629638672,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.53857421875,
    top: 1.5384521484375,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_980_0_4950_0_5397_0_5697: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(247, 181, 121, 1)"
  },
  View_I0_980_0_4951: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 223,
    top: 17,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_980_0_4951_0_5229: {
    flexGrow: 1,
    width: 15.387555122375488,
    height: 16.928056716918945,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.3076171875,
    top: 1.5384521484375
  },
  View_I0_980_0_4951_0_5230: {
    flexGrow: 1,
    width: 15.387555122375488,
    height: 16.928056716918945,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.3076171875,
    top: 1.5384521484375,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_980_0_4951_0_5230_0_4963: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(34, 36, 42, 1)"
  },
  View_I0_980_0_4952: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 132,
    top: 17,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_980_0_4952_0_5111: {
    flexGrow: 1,
    width: 15.384613990783691,
    height: 15.384613990783691,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.3076171875,
    top: 2.30767822265625
  },
  View_I0_980_0_4952_0_5114: {
    flexGrow: 1,
    width: 15.384613990783691,
    height: 15.384613990783691,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.3076171875,
    top: 2.30767822265625,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_980_0_4952_0_5114_0_4963: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(34, 36, 42, 1)"
  },
  View_I0_980_0_4953: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 17,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_980_0_4953_0_5541: {
    flexGrow: 1,
    width: 16.923076629638672,
    height: 16.923076629638672,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.53857421875,
    top: 1.5384521484375
  },
  View_I0_980_0_4953_0_5542: {
    flexGrow: 1,
    width: 16.923076629638672,
    height: 16.923076629638672,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.53857421875,
    top: 1.5384521484375,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_980_0_4953_0_5542_0_4963: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(34, 36, 42, 1)"
  },
  View_0_981: {
    flexGrow: 1,
    width: 375,
    height: 72,
    minHeight: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 44,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_981_0_5763: {
    flexGrow: 1,
    width: 375,
    height: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_981_0_5764: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 315,
    top: 26,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_981_0_5764_0_5073: {
    flexGrow: 1,
    width: 16.153846740722656,
    height: 16.153846740722656,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.923095703125,
    top: 1.923095703125
  },
  View_I0_981_0_5764_0_5074: {
    flexGrow: 1,
    width: 16.153846740722656,
    height: 16.153846740722656,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.923095703125,
    top: 1.923095703125,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_981_0_5764_0_5074_0_4963: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(34, 36, 42, 1)"
  },
  View_I0_981_0_5766: {
    flexGrow: 1,
    width: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 27.5999755859375
  },
  Text_I0_981_0_5766: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_981_0_5768: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 26,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_981_0_5768_0_5265: {
    flexGrow: 1,
    width: 7.692307472229004,
    height: 13.076922416687012,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.769287109375,
    top: 3.84619140625
  },
  View_I0_981_0_5768_0_5266: {
    flexGrow: 1,
    width: 7.692307472229004,
    height: 13.076922416687012,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.769287109375,
    top: 3.84619140625,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_981_0_5768_0_5266_0_4963: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(34, 36, 42, 1)"
  },
  View_0_982: {
    width: 134,
    height: 34,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 121,
    top: 778,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_982_0_5913: {
    flexGrow: 1,
    width: 134,
    height: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 20,
    backgroundColor: "rgba(205, 205, 215, 1)"
  },
  View_0_983: {
    flexGrow: 1,
    width: 375,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_983_0_5883: {
    flexGrow: 1,
    width: 24.32803726196289,
    height: 11.333333015441895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 336,
    top: 17.3333740234375
  },
  View_I0_983_0_5884: {
    width: 22,
    height: 11.333333015441895,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_983_0_5885: {
    width: 1.328037977218628,
    height: 4,
    top: 3.6666259765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  View_I0_983_0_5886: {
    width: 18,
    height: 7.333333492279053,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I0_983_0_5889: {
    flexGrow: 1,
    width: 15.27237606048584,
    height: 10.965571403503418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 315.69384765625,
    top: 17.3306884765625
  },
  ImageBackground_I0_983_0_5893: {
    flexGrow: 1,
    width: 17,
    height: 10.666666984558105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.666748046875,
    top: 17.6666259765625
  },
  View_I0_983_0_5896: {
    flexGrow: 1,
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 13.5999755859375
  },
  Text_I0_983_0_5896: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
