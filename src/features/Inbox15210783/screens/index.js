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
      <View style={styles.View_0_985} />
      <View style={styles.View_0_986}>
        <View style={styles.View_0_987} />
        <View style={styles.View_0_988} />
        <View style={styles.View_0_989}>
          <Text style={styles.Text_0_989}>Fresh Readymag tutorials…</Text>
        </View>
        <View style={styles.View_0_990}>
          <Text style={styles.Text_0_990}>
            You can apply style to a paragraph…
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d8d/94d0/8f6d9043101f3a1fdc69a6d13cd6976e"
          }}
          style={styles.ImageBackground_0_991}
        />
        <View style={styles.View_0_992}>
          <Text style={styles.Text_0_992}>Readymag</Text>
        </View>
        <View style={styles.View_0_993}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/043a/6533/938d3df0ca63e75457ff7ea51196f4d4"
            }}
            style={styles.ImageBackground_0_994}
          />
          <View style={styles.View_0_995}>
            <Text style={styles.Text_0_995}>R</Text>
          </View>
        </View>
        <View style={styles.View_0_996}>
          <Text style={styles.Text_0_996}>10:20 pm</Text>
        </View>
      </View>
      <View style={styles.View_0_997}>
        <View style={styles.View_0_998} />
        <View style={styles.View_0_999} />
        <View style={styles.View_0_1000}>
          <Text style={styles.Text_0_1000}>designerui, see new posts…</Text>
        </View>
        <View style={styles.View_0_1001}>
          <Text style={styles.Text_0_1001}>
            See what&#39;s new from the people…
          </Text>
        </View>
        <View style={styles.View_0_1002}>
          <Text style={styles.Text_0_1002}>Instagram</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dcd4/0cd3/d4278cb6b9e184153305d98dbb33651b"
          }}
          style={styles.ImageBackground_0_1003}
        />
        <View style={styles.View_0_1004}>
          <Text style={styles.Text_0_1004}>12 Jul</Text>
        </View>
      </View>
      <View style={styles.View_0_1005}>
        <View style={styles.View_0_1006} />
        <View style={styles.View_0_1007} />
        <View style={styles.View_0_1008}>
          <Text style={styles.Text_0_1008}>Would you like to buy</Text>
        </View>
        <View style={styles.View_0_1009}>
          <Text style={styles.Text_0_1009}>
            A Great Way To Generate All The…
          </Text>
        </View>
        <View style={styles.View_0_1010}>
          <Text style={styles.Text_0_1010}>Support</Text>
        </View>
        <View style={styles.View_0_1011}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de03/9545/ae2057976142d7700402bc7be71f82bf"
            }}
            style={styles.ImageBackground_0_1012}
          />
          <View style={styles.View_0_1013}>
            <Text style={styles.Text_0_1013}>S</Text>
          </View>
        </View>
        <View style={styles.View_0_1014}>
          <Text style={styles.Text_0_1014}>10 Jul</Text>
        </View>
      </View>
      <View style={styles.View_0_1015}>
        <View style={styles.View_0_1016} />
        <View style={styles.View_0_1017} />
        <View style={styles.View_0_1018}>
          <Text style={styles.Text_0_1018}>Know Yourself Your…</Text>
        </View>
        <View style={styles.View_0_1019}>
          <Text style={styles.Text_0_1019}>Discover Your Path To Success…</Text>
        </View>
        <View style={styles.View_0_1020}>
          <Text style={styles.Text_0_1020}>Readymag</Text>
        </View>
        <View style={styles.View_0_1021}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d886/635f/434fd3c1407f58026a6b8abe36380745"
            }}
            style={styles.ImageBackground_0_1022}
          />
          <View style={styles.View_0_1023}>
            <Text style={styles.Text_0_1023}>R</Text>
          </View>
        </View>
        <View style={styles.View_0_1024}>
          <Text style={styles.Text_0_1024}>10 Jul</Text>
        </View>
      </View>
      <View style={styles.View_0_1025}>
        <View style={styles.View_0_1026} />
        <View style={styles.View_0_1027} />
        <View style={styles.View_0_1028}>
          <Text style={styles.Text_0_1028}>The Mythology of Design</Text>
        </View>
        <View style={styles.View_0_1029}>
          <Text style={styles.Text_0_1029}>
            Myths, like symbols, have the ma…
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d8d/94d0/8f6d9043101f3a1fdc69a6d13cd6976e"
          }}
          style={styles.ImageBackground_0_1030}
        />
        <View style={styles.View_0_1031}>
          <Text style={styles.Text_0_1031}>Medium Daily Digest </Text>
        </View>
        <View style={styles.View_0_1032}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c8b/5473/1ab181e0caa8f2184c040ea316b2b279"
            }}
            style={styles.ImageBackground_0_1033}
          />
          <View style={styles.View_0_1034}>
            <Text style={styles.Text_0_1034}>M</Text>
          </View>
        </View>
        <View style={styles.View_0_1035}>
          <Text style={styles.Text_0_1035}>09:14 pm</Text>
        </View>
      </View>
      <View style={styles.View_0_1036}>
        <View style={styles.View_0_1037} />
        <View style={styles.View_0_1038} />
        <View style={styles.View_0_1039}>
          <Text style={styles.Text_0_1039}>Photo Collages</Text>
        </View>
        <View style={styles.View_0_1040}>
          <Text style={styles.Text_0_1040}>VSCO X Journal Spotlight</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d8d/94d0/8f6d9043101f3a1fdc69a6d13cd6976e"
          }}
          style={styles.ImageBackground_0_1041}
        />
        <View style={styles.View_0_1042}>
          <Text style={styles.Text_0_1042}>VSCO Issue</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8795/67b6/47eb36e6dd61c6c85bcfd1de063f4147"
          }}
          style={styles.ImageBackground_0_1043}
        />
        <View style={styles.View_0_1044}>
          <Text style={styles.Text_0_1044}>09:10 pm</Text>
        </View>
      </View>
      <View style={styles.View_0_1045}>
        <View style={styles.View_0_1046} />
        <View style={styles.View_0_1047} />
        <View style={styles.View_0_1048}>
          <Text style={styles.Text_0_1048}>Great works!</Text>
        </View>
        <View style={styles.View_0_1049}>
          <Text style={styles.Text_0_1049}>
            I looked at your Dribble and I…
          </Text>
        </View>
        <View style={styles.View_0_1050}>
          <Text style={styles.Text_0_1050}>Landon</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5a9/2d3b/5aa913997e104d0c413e87ce5e660eac"
          }}
          style={styles.ImageBackground_0_1051}
        />
        <View style={styles.View_0_1052}>
          <Text style={styles.Text_0_1052}>12 Jul</Text>
        </View>
      </View>
      <View style={styles.View_0_1053}>
        <Text style={styles.Text_0_1053}>INBOX</Text>
      </View>
      <View style={styles.View_0_1054}>
        <Text style={styles.Text_0_1054}>3/195</Text>
      </View>
      <View style={styles.View_0_1055}>
        <View style={styles.View_I0_1055_0_5763} />
        <View style={styles.View_I0_1055_0_5764}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae93/cb31/6761f7b5bc672720fd4048f6097ef73e"
            }}
            style={styles.ImageBackground_I0_1055_0_5764_0_5073}
          />
          <View style={styles.View_I0_1055_0_5764_0_5074}>
            <View style={styles.View_I0_1055_0_5764_0_5074_0_4963} />
          </View>
        </View>
        <View style={styles.View_I0_1055_0_5765}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7430/c478/7c26666035c3b729fda1e1a889e1bd12"
            }}
            style={styles.ImageBackground_I0_1055_0_5765_0_4967}
          />
          <View style={styles.View_I0_1055_0_5765_0_4968}>
            <View style={styles.View_I0_1055_0_5765_0_4968_0_4963} />
          </View>
        </View>
        <View style={styles.View_I0_1055_0_5766}>
          <Text style={styles.Text_I0_1055_0_5766}> </Text>
        </View>
        <View style={styles.View_I0_1055_0_5768}>
          <View style={styles.View_I0_1055_0_5768_0_5270}>
            <View style={styles.View_I0_1055_0_5768_0_5268} />
            <View style={styles.View_I0_1055_0_5768_0_5269} />
            <View style={styles.View_I0_1055_0_5768_0_5271} />
          </View>
          <View style={styles.View_I0_1055_0_5768_0_5272}>
            <View style={styles.View_I0_1055_0_5768_0_5272_0_4963} />
          </View>
        </View>
      </View>
      <View style={styles.View_0_1056}>
        <View style={styles.View_I0_1056_0_5883}>
          <View style={styles.View_I0_1056_0_5884} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
            }}
            style={styles.ImageBackground_I0_1056_0_5885}
          />
          <View style={styles.View_I0_1056_0_5886} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ec9/d1a9/26e3d3c84389bc4553d81f36e8c06405"
          }}
          style={styles.ImageBackground_I0_1056_0_5889}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
          }}
          style={styles.ImageBackground_I0_1056_0_5893}
        />
        <View style={styles.View_I0_1056_0_5896}>
          <Text style={styles.Text_I0_1056_0_5896}>9:41</Text>
        </View>
      </View>
      <View style={styles.View_0_1057}>
        <View style={styles.View_I0_1057_0_5913} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_985: {
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
  View_0_986: {
    flexGrow: 1,
    width: 375,
    height: 88,
    minHeight: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 188
  },
  View_0_987: {
    width: 375,
    height: 88,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_988: {
    flexGrow: 1,
    width: 232,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 87,
    backgroundColor: "rgba(241, 243, 248, 1)"
  },
  View_0_989: {
    width: 193,
    minWidth: 193,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 32.5999755859375
  },
  Text_0_989: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_990: {
    width: 218,
    minWidth: 218,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 54.800048828125
  },
  Text_0_990: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_991: {
    width: 7,
    minWidth: 7,
    height: 7,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 41
  },
  View_0_992: {
    width: 63,
    minWidth: 63,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 14
  },
  Text_0_992: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_993: {
    width: 48,
    minWidth: 48,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 20
  },
  ImageBackground_0_994: {
    width: 48,
    minWidth: 48,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_995: {
    width: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 14
  },
  Text_0_995: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_996: {
    width: 53,
    minWidth: 53,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 282,
    top: 15.5
  },
  Text_0_996: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 8,
    fontFamily: "Montserrat-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_0_997: {
    flexGrow: 1,
    width: 375,
    height: 88,
    minHeight: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 540
  },
  View_0_998: {
    width: 375,
    height: 88,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_999: {
    flexGrow: 1,
    width: 232,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 87,
    backgroundColor: "rgba(241, 243, 248, 1)"
  },
  View_0_1000: {
    width: 194,
    minWidth: 194,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 32.5999755859375
  },
  Text_0_1000: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1001: {
    width: 206,
    minWidth: 206,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 54.79998779296875
  },
  Text_0_1001: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1002: {
    width: 60,
    minWidth: 60,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 14
  },
  Text_0_1002: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1003: {
    width: 48,
    minWidth: 48,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 20
  },
  View_0_1004: {
    width: 38,
    minWidth: 38,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 297,
    top: 15.5
  },
  Text_0_1004: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 8,
    fontFamily: "Montserrat-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_0_1005: {
    flexGrow: 1,
    width: 375,
    height: 88,
    minHeight: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 628
  },
  View_0_1006: {
    width: 375,
    height: 88,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_1007: {
    flexGrow: 1,
    width: 232,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 87,
    backgroundColor: "rgba(241, 243, 248, 1)"
  },
  View_0_1008: {
    width: 154,
    minWidth: 154,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 32.5999755859375
  },
  Text_0_1008: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1009: {
    width: 205,
    minWidth: 205,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 54.79998779296875
  },
  Text_0_1009: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1010: {
    width: 47,
    minWidth: 47,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 14
  },
  Text_0_1010: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1011: {
    width: 48,
    minWidth: 48,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 20
  },
  ImageBackground_0_1012: {
    width: 48,
    minWidth: 48,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1013: {
    width: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19.5,
    top: 14
  },
  Text_0_1013: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1014: {
    width: 39,
    minWidth: 39,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 296,
    top: 15.5
  },
  Text_0_1014: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 8,
    fontFamily: "Montserrat-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_0_1015: {
    flexGrow: 1,
    width: 375,
    height: 88,
    minHeight: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 716
  },
  View_0_1016: {
    width: 375,
    height: 88,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_1017: {
    flexGrow: 1,
    width: 232,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 87,
    backgroundColor: "rgba(241, 243, 248, 1)"
  },
  View_0_1018: {
    width: 147,
    minWidth: 147,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 32.5999755859375
  },
  Text_0_1018: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1019: {
    width: 193,
    minWidth: 193,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 54.79998779296875
  },
  Text_0_1019: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1020: {
    width: 63,
    minWidth: 63,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 14
  },
  Text_0_1020: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1021: {
    width: 48,
    minWidth: 48,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 20
  },
  ImageBackground_0_1022: {
    width: 48,
    minWidth: 48,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1023: {
    width: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 14
  },
  Text_0_1023: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1024: {
    width: 39,
    minWidth: 39,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 296,
    top: 15.5
  },
  Text_0_1024: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 8,
    fontFamily: "Montserrat-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_0_1025: {
    flexGrow: 1,
    width: 375,
    height: 88,
    minHeight: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 276
  },
  View_0_1026: {
    width: 375,
    height: 88,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_1027: {
    flexGrow: 1,
    width: 232,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 87,
    backgroundColor: "rgba(241, 243, 248, 1)"
  },
  View_0_1028: {
    width: 178,
    minWidth: 178,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 32.5999755859375
  },
  Text_0_1028: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1029: {
    width: 209,
    minWidth: 209,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 54.79998779296875
  },
  Text_0_1029: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1030: {
    width: 7,
    minWidth: 7,
    height: 7,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 41
  },
  View_0_1031: {
    width: 121,
    minWidth: 121,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 14
  },
  Text_0_1031: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1032: {
    width: 48,
    minWidth: 48,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 20
  },
  ImageBackground_0_1033: {
    width: 48,
    minWidth: 48,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_1034: {
    width: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.5,
    top: 14
  },
  Text_0_1034: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1035: {
    width: 53,
    minWidth: 53,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 282,
    top: 15.5
  },
  Text_0_1035: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 8,
    fontFamily: "Montserrat-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_0_1036: {
    flexGrow: 1,
    width: 375,
    height: 88,
    minHeight: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 364
  },
  View_0_1037: {
    width: 375,
    height: 88,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_1038: {
    flexGrow: 1,
    width: 232,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 87,
    backgroundColor: "rgba(241, 243, 248, 1)"
  },
  View_0_1039: {
    width: 107,
    minWidth: 107,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 32.5999755859375
  },
  Text_0_1039: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1040: {
    width: 154,
    minWidth: 154,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 54.79998779296875
  },
  Text_0_1040: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1041: {
    width: 7,
    minWidth: 7,
    height: 7,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 41
  },
  View_0_1042: {
    width: 66,
    minWidth: 66,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 14
  },
  Text_0_1042: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1043: {
    width: 48,
    minWidth: 48,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 20
  },
  View_0_1044: {
    width: 53,
    minWidth: 53,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 282,
    top: 15.5
  },
  Text_0_1044: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 8,
    fontFamily: "Montserrat-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_0_1045: {
    flexGrow: 1,
    width: 375,
    height: 88,
    minHeight: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 452
  },
  View_0_1046: {
    width: 375,
    height: 88,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_1047: {
    flexGrow: 1,
    width: 232,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 87,
    backgroundColor: "rgba(241, 243, 248, 1)"
  },
  View_0_1048: {
    width: 89,
    minWidth: 89,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 32.5999755859375
  },
  Text_0_1048: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1049: {
    width: 185,
    minWidth: 185,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 54.79998779296875
  },
  Text_0_1049: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1050: {
    width: 44,
    minWidth: 44,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 14
  },
  Text_0_1050: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1051: {
    width: 48,
    minWidth: 48,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 20
  },
  View_0_1052: {
    width: 38,
    minWidth: 38,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 297,
    top: 15.5
  },
  Text_0_1052: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 8,
    fontFamily: "Montserrat-Regular",
    textAlign: "right",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_0_1053: {
    width: 72,
    minWidth: 72,
    minHeight: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 136
  },
  Text_0_1053: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 31,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1054: {
    width: 48,
    minWidth: 48,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 122,
    top: 147
  },
  Text_0_1054: {
    color: "rgba(205, 205, 215, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1055: {
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
  View_I0_1055_0_5763: {
    flexGrow: 1,
    width: 375,
    height: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_1055_0_5764: {
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
  ImageBackground_I0_1055_0_5764_0_5073: {
    flexGrow: 1,
    width: 16.153846740722656,
    height: 16.153846740722656,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.923095703125,
    top: 1.923095703125
  },
  View_I0_1055_0_5764_0_5074: {
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
  View_I0_1055_0_5764_0_5074_0_4963: {
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
  View_I0_1055_0_5765: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 275,
    top: 26,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1055_0_5765_0_4967: {
    flexGrow: 1,
    width: 13.076923370361328,
    height: 13.076923370361328,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.46142578125,
    top: 3.4615478515625
  },
  View_I0_1055_0_5765_0_4968: {
    flexGrow: 1,
    width: 13.076923370361328,
    height: 13.076923370361328,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.46142578125,
    top: 3.4615478515625,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1055_0_5765_0_4968_0_4963: {
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
  View_I0_1055_0_5766: {
    flexGrow: 1,
    width: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 27.5999755859375
  },
  Text_I0_1055_0_5766: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1055_0_5768: {
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
  View_I0_1055_0_5768_0_5270: {
    flexGrow: 1,
    width: 18.46142578125,
    height: 11.5384521484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.769287109375,
    top: 4.6153564453125
  },
  View_I0_1055_0_5768_0_5268: {
    width: 9.230768203735352,
    height: 2.307692527770996,
    top: 9.230712890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.230712890625,
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  View_I0_1055_0_5768_0_5269: {
    width: 18.461538314819336,
    height: 2.307692527770996,
    top: 4.6153564453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  View_I0_1055_0_5768_0_5271: {
    width: 9.230769157409668,
    height: 2.307692527770996,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  View_I0_1055_0_5768_0_5272: {
    flexGrow: 1,
    width: 18.46142578125,
    height: 11.5384521484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.769287109375,
    top: 4.6153564453125,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1055_0_5768_0_5272_0_4963: {
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
  View_0_1056: {
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
  View_I0_1056_0_5883: {
    flexGrow: 1,
    width: 24.32803726196289,
    height: 11.333333015441895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 336,
    top: 17.3333740234375
  },
  View_I0_1056_0_5884: {
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
  ImageBackground_I0_1056_0_5885: {
    width: 1.328037977218628,
    height: 4,
    top: 3.6666259765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  View_I0_1056_0_5886: {
    width: 18,
    height: 7.333333492279053,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I0_1056_0_5889: {
    flexGrow: 1,
    width: 15.27237606048584,
    height: 10.965571403503418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 315.69384765625,
    top: 17.3306884765625
  },
  ImageBackground_I0_1056_0_5893: {
    flexGrow: 1,
    width: 17,
    height: 10.666666984558105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.666748046875,
    top: 17.6666259765625
  },
  View_I0_1056_0_5896: {
    flexGrow: 1,
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 13.5999755859375
  },
  Text_I0_1056_0_5896: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1057: {
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
  View_I0_1057_0_5913: {
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
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
