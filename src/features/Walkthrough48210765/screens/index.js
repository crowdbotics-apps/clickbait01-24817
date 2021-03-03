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
      <View style={styles.View_0_136} />
      <View style={styles.View_0_137}>
        <View style={styles.View_I0_137_0_5699} />
        <View style={styles.View_I0_137_0_5700}>
          <View style={styles.View_I0_137_0_5700_0_5695} />
        </View>
        <View style={styles.View_I0_137_0_5701}>
          <Text style={styles.Text_I0_137_0_5701}>Open</Text>
        </View>
      </View>
      <View style={styles.View_0_138}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9089/d901/8b250467e5a7671ac4bbd4d8cda42751"
          }}
          style={styles.ImageBackground_0_139}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d23/2c70/420c514015ff3a571c0643747a22c9b3"
          }}
          style={styles.ImageBackground_0_141}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d23/2c70/420c514015ff3a571c0643747a22c9b3"
          }}
          style={styles.ImageBackground_0_142}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d23/2c70/420c514015ff3a571c0643747a22c9b3"
          }}
          style={styles.ImageBackground_0_143}
        />
      </View>
      <View style={styles.View_0_144}>
        <Text style={styles.Text_0_144}>
          Motivation And Your Personal Vision An Unbeatable Force
        </Text>
      </View>
      <View style={styles.View_0_145}>
        <Text style={styles.Text_0_145}>The World</Text>
      </View>
      <View style={styles.View_0_146}>
        <Text style={styles.Text_0_146}>Wonderful</Text>
      </View>
      <View style={styles.View_0_147}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc87/4ec3/8c0271b55d523fbe0caf45113b835edb"
          }}
          style={styles.ImageBackground_0_148}
        />
        <View style={styles.View_0_149}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e3d/20e3/55fdf2ba7bb49b265ebe73fea24ed735"
            }}
            style={styles.ImageBackground_I0_149_0_5170}
          />
          <View style={styles.View_I0_149_0_5171}>
            <View style={styles.View_I0_149_0_5171_0_5681} />
          </View>
        </View>
      </View>
      <View style={styles.View_0_150}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffa5/aa27/d07103ad12e8e1ee790f59939a7c7f2e"
          }}
          style={styles.ImageBackground_0_151}
        />
        <View style={styles.View_0_152}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44c8/09cc/1316974681a3336e91b8dcc2705f6204"
            }}
            style={styles.ImageBackground_I0_152_0_5142}
          />
          <View style={styles.View_I0_152_0_5143}>
            <View style={styles.View_I0_152_0_5143_0_5681} />
          </View>
        </View>
      </View>
      <View style={styles.View_0_153}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d9f/047e/28f5dcdbe740590c316b40f0ba48b92c"
          }}
          style={styles.ImageBackground_0_154}
        />
        <View style={styles.View_0_155}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b16/e57a/786a124f2f4b586f28139a071e8863ab"
            }}
            style={styles.ImageBackground_I0_155_0_5321}
          />
          <View style={styles.View_I0_155_0_5322}>
            <View style={styles.View_I0_155_0_5322_0_5681} />
          </View>
        </View>
      </View>
      <View style={styles.View_0_156}>
        <View style={styles.View_I0_156_0_5883}>
          <View style={styles.View_I0_156_0_5884} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
            }}
            style={styles.ImageBackground_I0_156_0_5885}
          />
          <View style={styles.View_I0_156_0_5886} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
          }}
          style={styles.ImageBackground_I0_156_0_5889}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
          }}
          style={styles.ImageBackground_I0_156_0_5893}
        />
        <View style={styles.View_I0_156_0_5896}>
          <Text style={styles.Text_I0_156_0_5896}>9:41</Text>
        </View>
      </View>
      <View style={styles.View_0_157}>
        <View style={styles.View_I0_157_0_5913} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_136: {
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
  View_0_137: {
    width: 132,
    height: 46,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 122,
    top: 716,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_137_0_5699: {
    flexGrow: 1,
    width: 132,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I0_137_0_5700: {
    flexGrow: 1,
    width: 132,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_137_0_5700_0_5695: {
    flexGrow: 1,
    width: 132,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(100, 120, 211, 1)"
  },
  View_I0_137_0_5701: {
    flexGrow: 1,
    width: 129,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    top: 14.5999755859375
  },
  Text_I0_137_0_5701: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_138: {
    width: 54,
    height: 6,
    minHeight: 6,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 161,
    top: 670
  },
  ImageBackground_0_139: {
    width: 6,
    height: 6,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 48
  },
  ImageBackground_0_141: {
    width: 6,
    height: 6,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32
  },
  ImageBackground_0_142: {
    width: 6,
    height: 6,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16
  },
  ImageBackground_0_143: {
    width: 6,
    height: 6,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_144: {
    width: 257,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59,
    top: 525.5999755859375
  },
  Text_0_144: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_145: {
    width: 74,
    minWidth: 74,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 151,
    top: 441.5
  },
  Text_0_145: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 8,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_0_146: {
    width: 143,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 116,
    top: 466
  },
  Text_0_146: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 31,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_147: {
    width: 96,
    minWidth: 96,
    height: 96,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 320,
    top: 247
  },
  ImageBackground_0_148: {
    width: 96,
    height: 96,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_149: {
    width: 30,
    height: 30,
    top: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_149_0_5170: {
    flexGrow: 1,
    width: 20.769229888916016,
    height: 25.38461685180664,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.6153564453125,
    top: 2.3076171875
  },
  View_I0_149_0_5171: {
    flexGrow: 1,
    width: 20.769229888916016,
    height: 25.38461685180664,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.6153564453125,
    top: 2.3076171875,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_149_0_5171_0_5681: {
    flexGrow: 1,
    width: 30,
    height: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_150: {
    width: 165,
    height: 165,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 105,
    top: 212
  },
  ImageBackground_0_151: {
    width: 165,
    height: 165,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_152: {
    width: 51,
    height: 51,
    top: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 57,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_152_0_5142: {
    flexGrow: 1,
    width: 45.115386962890625,
    height: 45.115386962890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.9422607421875,
    top: 2.9423828125
  },
  View_I0_152_0_5143: {
    flexGrow: 1,
    width: 45.115386962890625,
    height: 45.115386962890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.9422607421875,
    top: 2.9423828125,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_152_0_5143_0_5681: {
    flexGrow: 1,
    width: 51,
    height: 51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_153: {
    width: 96,
    minWidth: 96,
    height: 96,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -41,
    top: 247
  },
  ImageBackground_0_154: {
    width: 96,
    height: 96,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_155: {
    width: 30,
    height: 30,
    top: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_155_0_5321: {
    flexGrow: 1,
    width: 28.84673500061035,
    height: 23.077377319335938,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.576904296875,
    top: 3.46142578125
  },
  View_I0_155_0_5322: {
    flexGrow: 1,
    width: 28.84673500061035,
    height: 23.077377319335938,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.576904296875,
    top: 3.46142578125,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_155_0_5322_0_5681: {
    flexGrow: 1,
    width: 30,
    height: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_156: {
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
  View_I0_156_0_5883: {
    flexGrow: 1,
    width: 24.32803726196289,
    height: 11.333333015441895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 336,
    top: 17.333251953125
  },
  View_I0_156_0_5884: {
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
  ImageBackground_I0_156_0_5885: {
    width: 1.328037977218628,
    height: 4,
    top: 3.666748046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  View_I0_156_0_5886: {
    width: 18,
    height: 7.333333492279053,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I0_156_0_5889: {
    flexGrow: 1,
    width: 15.27237606048584,
    height: 10.965571403503418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 315.6937255859375,
    top: 17.33056640625
  },
  ImageBackground_I0_156_0_5893: {
    flexGrow: 1,
    width: 17,
    height: 10.666666984558105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.6666259765625,
    top: 17.666748046875
  },
  View_I0_156_0_5896: {
    flexGrow: 1,
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 13.60009765625
  },
  Text_I0_156_0_5896: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_157: {
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
  View_I0_157_0_5913: {
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
