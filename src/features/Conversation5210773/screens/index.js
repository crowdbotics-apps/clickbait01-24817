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
      <View style={styles.View_0_418} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cd6/6f76/8c5488063aedd2a1a9c9cc35918cd15d"
        }}
        style={styles.ImageBackground_0_419}
      />
      <View style={styles.View_0_420}>
        <View style={styles.View_I0_420_0_5813} />
        <View style={styles.View_I0_420_0_5814}>
          <View style={styles.View_I0_420_0_5814_0_5685} />
        </View>
        <View style={styles.View_I0_420_0_5815}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a9e/31e7/88a31fa1c5b7b0ae5f80a3d7a771631b"
            }}
            style={styles.ImageBackground_I0_420_0_5815_0_5154}
          />
          <View style={styles.View_I0_420_0_5815_0_5155}>
            <View style={styles.View_I0_420_0_5815_0_5155_0_5681} />
          </View>
        </View>
      </View>
      <View style={styles.View_0_421}>
        <View style={styles.View_0_422}>
          <View style={styles.View_0_423}>
            <Text style={styles.Text_0_423}>More</Text>
          </View>
        </View>
        <View style={styles.View_0_424}>
          <View style={styles.View_I0_424_0_5813} />
          <View style={styles.View_I0_424_0_5814}>
            <View style={styles.View_I0_424_0_5814_0_5681} />
          </View>
          <View style={styles.View_I0_424_0_5815}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbe5/3025/939edeabfaffc8a5883031e2ca7691c1"
              }}
              style={styles.ImageBackground_I0_424_0_5815_0_5326}
            />
            <View style={styles.View_I0_424_0_5815_0_5328}>
              <View style={styles.View_I0_424_0_5815_0_5328_0_5687} />
            </View>
          </View>
        </View>
        <View style={styles.View_0_425}>
          <View style={styles.View_0_426}>
            <Text style={styles.Text_0_426}>Mute</Text>
          </View>
        </View>
        <View style={styles.View_0_427}>
          <View style={styles.View_I0_427_0_5813} />
          <View style={styles.View_I0_427_0_5814}>
            <View style={styles.View_I0_427_0_5814_0_5681} />
          </View>
          <View style={styles.View_I0_427_0_5815}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/702f/0079/0e26bb15ef17a19f3f784d66c7bb187d"
              }}
              style={styles.ImageBackground_I0_427_0_5815_0_5009}
            />
            <View style={styles.View_I0_427_0_5815_0_5010}>
              <View style={styles.View_I0_427_0_5815_0_5010_0_5687} />
            </View>
          </View>
        </View>
        <View style={styles.View_0_428}>
          <View style={styles.View_0_429}>
            <Text style={styles.Text_0_429}>Add Call</Text>
          </View>
        </View>
        <View style={styles.View_0_430}>
          <View style={styles.View_I0_430_0_5813} />
          <View style={styles.View_I0_430_0_5814}>
            <View style={styles.View_I0_430_0_5814_0_5681} />
          </View>
          <View style={styles.View_I0_430_0_5815}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/accf/de77/93afe4f7838d61be7c203e7d596d308d"
              }}
              style={styles.ImageBackground_I0_430_0_5815_0_4967}
            />
            <View style={styles.View_I0_430_0_5815_0_4968}>
              <View style={styles.View_I0_430_0_5815_0_4968_0_5687} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_431}>
        <View style={styles.View_0_432}>
          <Text style={styles.Text_0_432}>THINK</Text>
        </View>
        <View style={styles.View_0_433}>
          <Text style={styles.Text_0_433}>Helena barnes</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e512/c3f3/208e21e88420963cffd0d6fadf6333b1"
          }}
          style={styles.ImageBackground_0_434}
        />
      </View>
      <View style={styles.View_0_435}>
        <View style={styles.View_I0_435_0_5898}>
          <View style={styles.View_I0_435_0_5899} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
            }}
            style={styles.ImageBackground_I0_435_0_5900}
          />
          <View style={styles.View_I0_435_0_5901} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
          }}
          style={styles.ImageBackground_I0_435_0_5904}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
          }}
          style={styles.ImageBackground_I0_435_0_5908}
        />
        <View style={styles.View_I0_435_0_5911}>
          <Text style={styles.Text_I0_435_0_5911}>9:41</Text>
        </View>
      </View>
      <View style={styles.View_0_436}>
        <View style={styles.View_I0_436_0_5770} />
        <View style={styles.View_I0_436_0_5771}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f687/2b5b/642656f0f4cde92ce4d57b0e2e36fef8"
            }}
            style={styles.ImageBackground_I0_436_0_5771_0_5043}
          />
          <View style={styles.View_I0_436_0_5771_0_5044}>
            <View style={styles.View_I0_436_0_5771_0_5044_0_5681} />
          </View>
        </View>
        <View style={styles.View_I0_436_0_5773}>
          <Text style={styles.Text_I0_436_0_5773}>02:10</Text>
        </View>
        <View style={styles.View_I0_436_0_5775}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fcd/1ed1/9e4d7c182a52e943d74aa4629bcb2dee"
            }}
            style={styles.ImageBackground_I0_436_0_5775_0_5185}
          />
          <View style={styles.View_I0_436_0_5775_0_5186}>
            <View style={styles.View_I0_436_0_5775_0_5186_0_5681} />
          </View>
        </View>
      </View>
      <View style={styles.View_0_437}>
        <View style={styles.View_I0_437_0_5917} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_418: {
    width: 375,
    height: 812,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(34, 36, 42, 1)"
  },
  ImageBackground_0_419: {
    width: 375,
    height: 812,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    resizeMode: "cover"
  },
  View_0_420: {
    width: 65,
    height: 65,
    minHeight: 65,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 155,
    top: 677,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_420_0_5813: {
    flexGrow: 1,
    width: 65,
    height: 65,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I0_420_0_5814: {
    flexGrow: 1,
    width: 65,
    height: 65,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_420_0_5814_0_5685: {
    flexGrow: 1,
    width: 65,
    height: 65,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(239, 75, 95, 1)"
  },
  View_I0_420_0_5815: {
    flexGrow: 1,
    width: 16,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 25,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_420_0_5815_0_5154: {
    flexGrow: 1,
    width: 16,
    height: 6.4571003913879395,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 4.923095703125
  },
  View_I0_420_0_5815_0_5155: {
    flexGrow: 1,
    width: 16,
    height: 6.4571003913879395,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 4.923095703125,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_420_0_5815_0_5155_0_5681: {
    flexGrow: 1,
    width: 16,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_421: {
    width: 218.5,
    height: 76.80000305175781,
    minHeight: 76.80000305175781,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76.5,
    top: 547
  },
  View_0_422: {
    width: 32,
    height: 22,
    top: 54.79998779296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 180
  },
  View_0_423: {
    width: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_0_423: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_424: {
    width: 45,
    minWidth: 45,
    height: 45,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 173.5,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_424_0_5813: {
    flexGrow: 1,
    width: 45,
    height: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I0_424_0_5814: {
    flexGrow: 1,
    width: 45,
    height: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_424_0_5814_0_5681: {
    flexGrow: 1,
    width: 45,
    height: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I0_424_0_5815: {
    flexGrow: 1,
    width: 16,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 15,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_424_0_5815_0_5326: {
    flexGrow: 1,
    width: 3.076923370361328,
    height: 12.923076629638672,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.4615478515625,
    top: 1.5384521484375
  },
  View_I0_424_0_5815_0_5328: {
    flexGrow: 1,
    width: 3.076923370361328,
    height: 12.923076629638672,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.4615478515625,
    top: 1.5384521484375,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_424_0_5815_0_5328_0_5687: {
    flexGrow: 1,
    width: 16,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(141, 146, 163, 1)"
  },
  View_0_425: {
    width: 32,
    height: 22,
    top: 54.79998779296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 95
  },
  View_0_426: {
    width: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_0_426: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_427: {
    width: 45,
    height: 45,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 88.5,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_427_0_5813: {
    flexGrow: 1,
    width: 45,
    height: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I0_427_0_5814: {
    flexGrow: 1,
    width: 45,
    height: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_427_0_5814_0_5681: {
    flexGrow: 1,
    width: 45,
    height: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I0_427_0_5815: {
    flexGrow: 1,
    width: 16,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 15,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_427_0_5815_0_5009: {
    flexGrow: 1,
    width: 10.461538314819336,
    height: 15.076922416687012,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.76922607421875,
    top: 0.6153564453125
  },
  View_I0_427_0_5815_0_5010: {
    flexGrow: 1,
    width: 10.461538314819336,
    height: 15.076922416687012,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.76922607421875,
    top: 0.6153564453125,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_427_0_5815_0_5010_0_5687: {
    flexGrow: 1,
    width: 16,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(141, 146, 163, 1)"
  },
  View_0_428: {
    width: 51,
    height: 22,
    top: 54.79998779296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_429: {
    width: 51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_0_429: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_430: {
    width: 45,
    minWidth: 45,
    height: 45,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.5,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_430_0_5813: {
    flexGrow: 1,
    width: 45,
    height: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I0_430_0_5814: {
    flexGrow: 1,
    width: 45,
    height: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_430_0_5814_0_5681: {
    flexGrow: 1,
    width: 45,
    height: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I0_430_0_5815: {
    flexGrow: 1,
    width: 16,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 15,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_430_0_5815_0_4967: {
    flexGrow: 1,
    width: 10.461538314819336,
    height: 10.461538314819336,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.76922607421875,
    top: 2.76922607421875
  },
  View_I0_430_0_5815_0_4968: {
    flexGrow: 1,
    width: 10.461538314819336,
    height: 10.461538314819336,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.76922607421875,
    top: 2.76922607421875,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_430_0_5815_0_4968_0_5687: {
    flexGrow: 1,
    width: 16,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(141, 146, 163, 1)"
  },
  View_0_431: {
    width: 118,
    height: 158.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 128,
    top: 252
  },
  View_0_432: {
    width: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40.5,
    top: 141.5
  },
  Text_0_432: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_0_433: {
    width: 118,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 107
  },
  Text_0_433: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_434: {
    width: 87,
    height: 87,
    minHeight: 87,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 0,
    resizeMode: "cover"
  },
  View_0_435: {
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
  View_I0_435_0_5898: {
    flexGrow: 1,
    width: 24.32803726196289,
    height: 11.333333015441895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 336,
    top: 17.3333740234375
  },
  View_I0_435_0_5899: {
    width: 22,
    height: 11.333333015441895,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_435_0_5900: {
    width: 1.328037977218628,
    height: 4,
    top: 3.6666259765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  View_I0_435_0_5901: {
    width: 18,
    height: 7.333333492279053,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I0_435_0_5904: {
    flexGrow: 1,
    width: 15.27237606048584,
    height: 10.965571403503418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 315.6937255859375,
    top: 17.3306884765625
  },
  ImageBackground_I0_435_0_5908: {
    flexGrow: 1,
    width: 17,
    height: 10.666666984558105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.6666259765625,
    top: 17.6666259765625
  },
  View_I0_435_0_5911: {
    flexGrow: 1,
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 13.5999755859375
  },
  Text_I0_435_0_5911: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_436: {
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
  View_I0_436_0_5770: {
    flexGrow: 1,
    width: 375,
    height: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_436_0_5771: {
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
  ImageBackground_I0_436_0_5771_0_5043: {
    flexGrow: 1,
    width: 18.461538314819336,
    height: 12.307692527770996,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.769287109375,
    top: 3.84619140625
  },
  View_I0_436_0_5771_0_5044: {
    flexGrow: 1,
    width: 18.461538314819336,
    height: 12.307692527770996,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.769287109375,
    top: 3.84619140625,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_436_0_5771_0_5044_0_5681: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I0_436_0_5773: {
    flexGrow: 1,
    width: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 170,
    top: 27.5999755859375
  },
  Text_I0_436_0_5773: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_436_0_5775: {
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
  ImageBackground_I0_436_0_5775_0_5185: {
    flexGrow: 1,
    width: 16.923076629638672,
    height: 16.920351028442383,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.5384521484375,
    top: 1.5384521484375
  },
  View_I0_436_0_5775_0_5186: {
    flexGrow: 1,
    width: 16.923076629638672,
    height: 16.920351028442383,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.5384521484375,
    top: 1.5384521484375,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_436_0_5775_0_5186_0_5681: {
    flexGrow: 1,
    width: 20,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_437: {
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
  View_I0_437_0_5917: {
    flexGrow: 1,
    width: 134,
    height: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 20,
    backgroundColor: "rgba(255, 255, 255, 1)"
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
