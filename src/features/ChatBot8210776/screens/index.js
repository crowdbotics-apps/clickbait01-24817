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
      <View style={styles.View_0_477} />
      <View style={styles.View_0_478}>
        <View style={styles.View_0_479}>
          <View style={styles.View_0_480} />
          <View source={{ uri: "null" }} style={styles.View_0_482} />
          <View style={styles.View_0_483}>
            <Text style={styles.Text_0_483}>Buy!</Text>
          </View>
          <View style={styles.View_0_484}>
            <Text style={styles.Text_0_484}>18:11</Text>
          </View>
          <View style={styles.View_0_485}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f570/278e/1aff11bfee96cfc9e17b0fed0fe75f5a"
              }}
              style={styles.ImageBackground_I0_485_0_5180}
            />
            <View style={styles.View_I0_485_0_5181}>
              <View style={styles.View_I0_485_0_5181_0_5689} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_486}>
        <View style={styles.View_0_487} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e70c/f625/83fa8ef6d2fb17ea4997afd1d2064227"
          }}
          style={styles.ImageBackground_0_488}
        />
        <View style={styles.View_0_489}>
          <Text style={styles.Text_0_489}>Lace-up Thong Panty</Text>
        </View>
        <View style={styles.View_0_490}>
          <Text style={styles.Text_0_490}>Panties </Text>
        </View>
        <View style={styles.View_0_491}>
          <Text style={styles.Text_0_491}>$19</Text>
        </View>
      </View>
      <View style={styles.View_0_492}>
        <View style={styles.View_0_493} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c25e/d945/9d5a8d938a6b9b938fb0128c3de8a684"
          }}
          style={styles.ImageBackground_0_494}
        />
        <View style={styles.View_0_495}>
          <Text style={styles.Text_0_495}>No Show Thong Panty</Text>
        </View>
        <View style={styles.View_0_496}>
          <Text style={styles.Text_0_496}>Panties </Text>
        </View>
        <View style={styles.View_0_497}>
          <Text style={styles.Text_0_497}>$19</Text>
        </View>
      </View>
      <View style={styles.View_0_498}>
        <View style={styles.View_0_499}>
          <Text style={styles.Text_0_499}>18:10</Text>
        </View>
        <View style={styles.View_0_500}>
          <View style={styles.View_0_501} />
          <View style={styles.View_0_502}>
            <Text style={styles.Text_0_502}>
              Great choice! Would you like to buy this?
            </Text>
          </View>
          <View style={styles.View_0_503}>
            <View style={styles.View_I0_503_0_5699} />
            <View style={styles.View_I0_503_0_5700}>
              <View style={styles.View_I0_503_0_5700_0_5695} />
            </View>
            <View style={styles.View_I0_503_0_5701}>
              <Text style={styles.Text_I0_503_0_5701}>Buy Now</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d439/a06f/53259fbf2527fdea174f95d22fb30f6e"
            }}
            style={styles.ImageBackground_0_504}
          />
        </View>
      </View>
      <View style={styles.View_0_505}>
        <View style={styles.View_0_506} />
        <View style={styles.View_0_507}>
          <View style={styles.View_0_508} />
          <View style={styles.View_0_509}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc92/5203/c0c6900a47000801e4057ae94348a9dc"
              }}
              style={styles.ImageBackground_I0_509_0_5504}
            />
            <View style={styles.View_I0_509_0_5505}>
              <View style={styles.View_I0_509_0_5505_0_5695} />
            </View>
          </View>
          <View style={styles.View_0_510} />
          <View style={styles.View_0_511}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed62/7c76/f1d1d1d95fa5092138108b069874cb77"
              }}
              style={styles.ImageBackground_I0_511_0_5441}
            />
            <View style={styles.View_I0_511_0_5444}>
              <View style={styles.View_I0_511_0_5444_0_5689} />
            </View>
          </View>
          <View style={styles.View_0_512}>
            <Text style={styles.Text_0_512}>Type a message</Text>
          </View>
          <View style={styles.View_0_513} />
          <View style={styles.View_0_514}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd99/96be/c402f17257fc553faf503de351ccddc1"
              }}
              style={styles.ImageBackground_I0_514_0_5242}
            />
            <View style={styles.View_I0_514_0_5244}>
              <View style={styles.View_I0_514_0_5244_0_5689} />
            </View>
          </View>
          <View style={styles.View_0_515} />
        </View>
      </View>
      <View style={styles.View_0_516}>
        <View style={styles.View_0_517}>
          <View style={styles.View_I0_517_0_5817} />
          <View style={styles.View_I0_517_0_5818}>
            <View style={styles.View_I0_517_0_5818_0_5693} />
          </View>
          <View style={styles.View_I0_517_0_5819}>
            <Text style={styles.Text_I0_517_0_5819}>Sport</Text>
          </View>
        </View>
        <View style={styles.View_0_518}>
          <View style={styles.View_I0_518_0_5817} />
          <View style={styles.View_I0_518_0_5818}>
            <View style={styles.View_I0_518_0_5818_0_5693} />
          </View>
          <View style={styles.View_I0_518_0_5819}>
            <Text style={styles.Text_I0_518_0_5819}>Lingerie</Text>
          </View>
        </View>
        <View style={styles.View_0_519}>
          <View style={styles.View_I0_519_0_5817} />
          <View style={styles.View_I0_519_0_5818}>
            <View style={styles.View_I0_519_0_5818_0_5693} />
          </View>
          <View style={styles.View_I0_519_0_5819}>
            <Text style={styles.Text_I0_519_0_5819}>Bras</Text>
          </View>
        </View>
        <View style={styles.View_0_520}>
          <View style={styles.View_I0_520_0_5817} />
          <View style={styles.View_I0_520_0_5818}>
            <View style={styles.View_I0_520_0_5818_0_5693} />
          </View>
          <View style={styles.View_I0_520_0_5819}>
            <Text style={styles.Text_I0_520_0_5819}>Panties</Text>
          </View>
        </View>
        <View style={styles.View_0_521}>
          <View style={styles.View_I0_521_0_5817} />
          <View style={styles.View_I0_521_0_5818}>
            <View style={styles.View_I0_521_0_5818_0_5693} />
          </View>
          <View style={styles.View_I0_521_0_5819}>
            <Text style={styles.Text_I0_521_0_5819}>Add To Bag</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_522}>
        <View style={styles.View_0_523}>
          <View style={styles.View_I0_523_0_5763} />
          <View style={styles.View_I0_523_0_5764}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89aa/357f/06a0261f6a306dc88061420bd0c7425b"
              }}
              style={styles.ImageBackground_I0_523_0_5764_0_5326}
            />
            <View style={styles.View_I0_523_0_5764_0_5328}>
              <View style={styles.View_I0_523_0_5764_0_5328_0_4963} />
            </View>
          </View>
          <View style={styles.View_I0_523_0_5766}>
            <Text style={styles.Text_I0_523_0_5766}> </Text>
          </View>
          <View style={styles.View_I0_523_0_5768}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/356f/d3a4/54158a0a2323fa83fa7cf77c2dcb2103"
              }}
              style={styles.ImageBackground_I0_523_0_5768_0_5265}
            />
            <View style={styles.View_I0_523_0_5768_0_5266}>
              <View style={styles.View_I0_523_0_5768_0_5266_0_4963} />
            </View>
          </View>
        </View>
        <View style={styles.View_0_524}>
          <View style={styles.View_0_525}>
            <Text style={styles.Text_0_525}>Shop</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ccba/8c76/9dc913e9433054091b925f09e7ad8fb5"
            }}
            style={styles.ImageBackground_0_526}
          />
          <View style={styles.View_0_527}>
            <Text style={styles.Text_0_527}>S</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_528}>
        <View style={styles.View_I0_528_0_5913} />
      </View>
      <View style={styles.View_0_529}>
        <View style={styles.View_I0_529_0_5883}>
          <View style={styles.View_I0_529_0_5884} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
            }}
            style={styles.ImageBackground_I0_529_0_5885}
          />
          <View style={styles.View_I0_529_0_5886} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
          }}
          style={styles.ImageBackground_I0_529_0_5889}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
          }}
          style={styles.ImageBackground_I0_529_0_5893}
        />
        <View style={styles.View_I0_529_0_5896}>
          <Text style={styles.Text_I0_529_0_5896}>9:41</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_477: {
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
  View_0_478: {
    width: 119,
    minWidth: 119,
    height: 72.80000305175781,
    minHeight: 72.80000305175781,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 236,
    top: 586
  },
  View_0_479: {
    width: 119,
    height: 72.80000305175781,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_480: {
    width: 84,
    minWidth: 84,
    height: 42,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 0,
    backgroundColor: "rgba(100, 120, 211, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 10
  },
  View_0_482: {
    width: 10,
    minWidth: 10,
    height: 10,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 109,
    top: 32
  },
  View_0_483: {
    width: 32,
    minWidth: 32,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 12.5999755859375
  },
  Text_0_483: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_484: {
    width: 24,
    minWidth: 24,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 65,
    top: 50.79998779296875
  },
  Text_0_484: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_485: {
    width: 15,
    minWidth: 15,
    height: 15,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 14,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_485_0_5180: {
    flexGrow: 1,
    width: 12.69230842590332,
    height: 12.69230842590332,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.153839111328125,
    top: 1.15386962890625
  },
  View_I0_485_0_5181: {
    flexGrow: 1,
    width: 12.69230842590332,
    height: 12.69230842590332,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.153839111328125,
    top: 1.15386962890625,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_485_0_5181_0_5689: {
    flexGrow: 1,
    width: 15,
    height: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(205, 205, 215, 1)"
  },
  View_0_486: {
    width: 186,
    minWidth: 186,
    height: 253,
    minHeight: 253,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 226,
    top: 136
  },
  View_0_487: {
    width: 186,
    minWidth: 186,
    height: 253,
    minHeight: 253,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(247, 248, 250, 1)"
  },
  ImageBackground_0_488: {
    width: 186,
    minWidth: 186,
    height: 194,
    minHeight: 194,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_0_489: {
    width: 131,
    minWidth: 131,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 207.79998779296875
  },
  Text_0_489: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_490: {
    width: 52,
    minWidth: 52,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 228.5
  },
  Text_0_490: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 8,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_0_491: {
    width: 19,
    minWidth: 19,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 152,
    top: 228.5
  },
  Text_0_491: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 8,
    fontFamily: "Montserrat-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_0_492: {
    width: 186,
    minWidth: 186,
    height: 253,
    minHeight: 253,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 136
  },
  View_0_493: {
    width: 186,
    minWidth: 186,
    height: 253,
    minHeight: 253,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(247, 248, 250, 1)"
  },
  ImageBackground_0_494: {
    width: 186,
    minWidth: 186,
    height: 194,
    minHeight: 194,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_0_495: {
    width: 136,
    minWidth: 136,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 207.79998779296875
  },
  Text_0_495: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_496: {
    width: 52,
    minWidth: 52,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 228.5
  },
  Text_0_496: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 8,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_0_497: {
    width: 19,
    minWidth: 19,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 152,
    top: 228.5
  },
  Text_0_497: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 8,
    fontFamily: "Montserrat-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_0_498: {
    width: 266,
    minWidth: 266,
    height: 170.8000030517578,
    minHeight: 170.8000030517578,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 399
  },
  View_0_499: {
    width: 65,
    minWidth: 65,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 148.79998779296875
  },
  Text_0_499: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_500: {
    width: 266,
    minWidth: 266,
    height: 140,
    minHeight: 140,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_501: {
    width: 256,
    minWidth: 256,
    height: 140,
    minHeight: 140,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 0,
    backgroundColor: "rgba(247, 248, 250, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 0
  },
  View_0_502: {
    width: 216,
    minWidth: 216,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 22.5999755859375
  },
  Text_0_502: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_503: {
    width: 216,
    minWidth: 216,
    height: 46,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 74,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_503_0_5699: {
    flexGrow: 1,
    width: 216,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I0_503_0_5700: {
    flexGrow: 1,
    width: 216,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_503_0_5700_0_5695: {
    flexGrow: 1,
    width: 216,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(100, 120, 211, 1)"
  },
  View_I0_503_0_5701: {
    flexGrow: 1,
    width: 213,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    top: 14.5999755859375
  },
  Text_I0_503_0_5701: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_504: {
    width: 10,
    minWidth: 10,
    height: 10,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 130
  },
  View_0_505: {
    width: 375,
    height: 112,
    minHeight: 112,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 700
  },
  View_0_506: {
    width: 375,
    minWidth: 375,
    height: 111,
    minHeight: 111,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_507: {
    flexGrow: 1,
    width: 375,
    height: 92,
    minHeight: 92,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_508: {
    width: 375,
    minWidth: 375,
    height: 91,
    minHeight: 91,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_509: {
    width: 22,
    minWidth: 22,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 333,
    top: 54,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_509_0_5504: {
    flexGrow: 1,
    width: 17.774253845214844,
    height: 16.932104110717773,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.5384521484375,
    top: 2.5384521484375
  },
  View_I0_509_0_5505: {
    flexGrow: 1,
    width: 17.774253845214844,
    height: 16.932104110717773,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.5384521484375,
    top: 2.5384521484375,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_509_0_5505_0_5695: {
    flexGrow: 1,
    width: 22,
    height: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(100, 120, 211, 1)"
  },
  View_0_510: {
    width: 1,
    minWidth: 1,
    height: 34,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 312,
    top: 48,
    backgroundColor: "rgba(241, 243, 248, 1)"
  },
  View_0_511: {
    width: 22,
    minWidth: 22,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 270,
    top: 54,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_511_0_5441: {
    flexGrow: 1,
    width: 18.61538314819336,
    height: 18.61538314819336,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.69232177734375,
    top: 1.69232177734375
  },
  View_I0_511_0_5444: {
    flexGrow: 1,
    width: 18.61538314819336,
    height: 18.61538314819336,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.69232177734375,
    top: 1.69232177734375,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_511_0_5444_0_5689: {
    flexGrow: 1,
    width: 22,
    height: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(205, 205, 215, 1)"
  },
  View_0_512: {
    width: 114,
    minWidth: 114,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 83,
    top: 56.5999755859375
  },
  Text_0_512: {
    color: "rgba(205, 205, 215, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_513: {
    width: 1,
    minWidth: 1,
    height: 34,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 62,
    top: 48,
    backgroundColor: "rgba(241, 243, 248, 1)"
  },
  View_0_514: {
    width: 22,
    minWidth: 22,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 54,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_514_0_5242: {
    flexGrow: 1,
    width: 20.30769157409668,
    height: 16.923076629638672,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.84613037109375,
    top: 2.5384521484375
  },
  View_I0_514_0_5244: {
    flexGrow: 1,
    width: 20.30769157409668,
    height: 16.923076629638672,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.84613037109375,
    top: 2.5384521484375,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_514_0_5244_0_5689: {
    flexGrow: 1,
    width: 22,
    height: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(205, 205, 215, 1)"
  },
  View_0_515: {
    width: 375,
    minWidth: 375,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(241, 243, 248, 1)"
  },
  View_0_516: {
    width: 390,
    minWidth: 390,
    height: 27,
    top: 711,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20
  },
  View_0_517: {
    width: 63,
    minWidth: 63,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 327,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_517_0_5817: {
    flexGrow: 1,
    width: 63,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I0_517_0_5818: {
    flexGrow: 1,
    width: 63,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_517_0_5818_0_5693: {
    flexGrow: 1,
    width: 63,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(247, 248, 250, 1)"
  },
  View_I0_517_0_5819: {
    flexGrow: 1,
    width: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.448272705078125,
    top: 6
  },
  Text_I0_517_0_5819: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_518: {
    width: 73,
    minWidth: 73,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 244,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_518_0_5817: {
    flexGrow: 1,
    width: 73,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I0_518_0_5818: {
    flexGrow: 1,
    width: 73,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_518_0_5818_0_5693: {
    flexGrow: 1,
    width: 73,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(247, 248, 250, 1)"
  },
  View_I0_518_0_5819: {
    flexGrow: 1,
    width: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12.011505126953125,
    top: 6
  },
  Text_I0_518_0_5819: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_519: {
    width: 54,
    minWidth: 54,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 180,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_519_0_5817: {
    flexGrow: 1,
    width: 54,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I0_519_0_5818: {
    flexGrow: 1,
    width: 54,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_519_0_5818_0_5693: {
    flexGrow: 1,
    width: 54,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(247, 248, 250, 1)"
  },
  View_I0_519_0_5819: {
    flexGrow: 1,
    width: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13.24139404296875,
    top: 6
  },
  Text_I0_519_0_5819: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_520: {
    width: 73,
    minWidth: 73,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 97,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_520_0_5817: {
    flexGrow: 1,
    width: 73,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I0_520_0_5818: {
    flexGrow: 1,
    width: 73,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_520_0_5818_0_5693: {
    flexGrow: 1,
    width: 73,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(247, 248, 250, 1)"
  },
  View_I0_520_0_5819: {
    flexGrow: 1,
    width: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.011505126953125,
    top: 6
  },
  Text_I0_520_0_5819: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_521: {
    width: 87,
    minWidth: 87,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_521_0_5817: {
    flexGrow: 1,
    width: 87,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I0_521_0_5818: {
    flexGrow: 1,
    width: 87,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_521_0_5818_0_5693: {
    flexGrow: 1,
    width: 87,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(247, 248, 250, 1)"
  },
  View_I0_521_0_5819: {
    flexGrow: 1,
    width: 67,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 6
  },
  Text_I0_521_0_5819: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_522: {
    width: 375,
    height: 72,
    top: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_523: {
    width: 375,
    height: 72,
    minHeight: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_523_0_5763: {
    flexGrow: 1,
    width: 375,
    height: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_523_0_5764: {
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
  ImageBackground_I0_523_0_5764_0_5326: {
    flexGrow: 1,
    width: 3.8461532592773438,
    height: 16.153846740722656,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.076934814453125,
    top: 1.923095703125
  },
  View_I0_523_0_5764_0_5328: {
    flexGrow: 1,
    width: 3.8461532592773438,
    height: 16.153846740722656,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.076934814453125,
    top: 1.923095703125,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_523_0_5764_0_5328_0_4963: {
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
  View_I0_523_0_5766: {
    flexGrow: 1,
    width: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 27.5999755859375
  },
  Text_I0_523_0_5766: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_523_0_5768: {
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
  ImageBackground_I0_523_0_5768_0_5265: {
    flexGrow: 1,
    width: 7.692307472229004,
    height: 13.076922416687012,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.76922607421875,
    top: 3.84619140625
  },
  View_I0_523_0_5768_0_5266: {
    flexGrow: 1,
    width: 7.692307472229004,
    height: 13.076922416687012,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.76922607421875,
    top: 3.84619140625,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_523_0_5768_0_5266_0_4963: {
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
  View_0_524: {
    width: 89,
    minWidth: 89,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 71,
    top: 18
  },
  View_0_525: {
    width: 38,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 51,
    top: 9.5999755859375
  },
  Text_0_525: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_526: {
    width: 36,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_527: {
    width: 9,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13.5,
    top: 8
  },
  Text_0_527: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_528: {
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
  View_I0_528_0_5913: {
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
  View_0_529: {
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
  View_I0_529_0_5883: {
    flexGrow: 1,
    width: 24.32803726196289,
    height: 11.333333015441895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 336,
    top: 17.3333740234375
  },
  View_I0_529_0_5884: {
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
  ImageBackground_I0_529_0_5885: {
    width: 1.328037977218628,
    height: 4,
    top: 3.6666259765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  View_I0_529_0_5886: {
    width: 18,
    height: 7.333333492279053,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I0_529_0_5889: {
    flexGrow: 1,
    width: 15.27237606048584,
    height: 10.965571403503418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 315.6937255859375,
    top: 17.3306884765625
  },
  ImageBackground_I0_529_0_5893: {
    flexGrow: 1,
    width: 17,
    height: 10.666666984558105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.6666564941406,
    top: 17.6666259765625
  },
  View_I0_529_0_5896: {
    flexGrow: 1,
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 13.5999755859375
  },
  Text_I0_529_0_5896: {
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
