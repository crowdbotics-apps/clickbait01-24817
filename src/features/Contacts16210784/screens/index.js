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
      <View style={styles.View_0_1059} />
      <View style={styles.View_0_1060}>
        <Text style={styles.Text_0_1060}>69</Text>
      </View>
      <View style={styles.View_0_1061}>
        <View style={styles.View_0_1062} />
        <View style={styles.View_0_1063}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e54/fef5/f674f8ef868389a37a08125ab880dc8e"
            }}
            style={styles.ImageBackground_I0_1063_0_5151}
          />
          <View style={styles.View_I0_1063_0_5152}>
            <View style={styles.View_I0_1063_0_5152_0_5689} />
          </View>
        </View>
        <View style={styles.View_0_1064} />
        <View style={styles.View_0_1065}>
          <Text style={styles.Text_0_1065}>Bruck Bond</Text>
        </View>
        <View style={styles.View_0_1066}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f80d/59bd/49e25d0c9d73d3b310f8520b7e0e84e1"
            }}
            style={styles.ImageBackground_0_1067}
          />
          <View style={styles.View_0_1068}>
            <Text style={styles.Text_0_1068}>BB</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_1069}>
        <View style={styles.View_0_1070} />
        <View style={styles.View_0_1071}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e54/fef5/f674f8ef868389a37a08125ab880dc8e"
            }}
            style={styles.ImageBackground_I0_1071_0_5151}
          />
          <View style={styles.View_I0_1071_0_5152}>
            <View style={styles.View_I0_1071_0_5152_0_5689} />
          </View>
        </View>
        <View style={styles.View_0_1072} />
        <View style={styles.View_0_1073}>
          <Text style={styles.Text_0_1073}>Bradley Smith</Text>
        </View>
        <View style={styles.View_0_1074}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c8b/5473/1ab181e0caa8f2184c040ea316b2b279"
            }}
            style={styles.ImageBackground_0_1075}
          />
          <View style={styles.View_0_1076}>
            <Text style={styles.Text_0_1076}>BS</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_1077}>
        <View style={styles.View_0_1078} />
        <View style={styles.View_0_1079}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e54/fef5/f674f8ef868389a37a08125ab880dc8e"
            }}
            style={styles.ImageBackground_I0_1079_0_5151}
          />
          <View style={styles.View_I0_1079_0_5152}>
            <View style={styles.View_I0_1079_0_5152_0_5689} />
          </View>
        </View>
        <View style={styles.View_0_1080}>
          <Text style={styles.Text_0_1080}>B</Text>
        </View>
        <View style={styles.View_0_1081} />
        <View style={styles.View_0_1082}>
          <Text style={styles.Text_0_1082}>Ben Volter</Text>
        </View>
        <View style={styles.View_0_1083}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/043a/6533/938d3df0ca63e75457ff7ea51196f4d4"
            }}
            style={styles.ImageBackground_0_1084}
          />
          <View style={styles.View_0_1085}>
            <Text style={styles.Text_0_1085}>BV</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_1086}>
        <View style={styles.View_0_1087} />
        <View style={styles.View_0_1088}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e54/fef5/f674f8ef868389a37a08125ab880dc8e"
            }}
            style={styles.ImageBackground_I0_1088_0_5151}
          />
          <View style={styles.View_I0_1088_0_5152}>
            <View style={styles.View_I0_1088_0_5152_0_5689} />
          </View>
        </View>
        <View style={styles.View_0_1089}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75d5/0ee8/435936332cd347f9d7c4da26b225213b"
            }}
            style={styles.ImageBackground_I0_1089_0_5043}
          />
          <View style={styles.View_I0_1089_0_5044}>
            <View style={styles.View_I0_1089_0_5044_0_5689} />
          </View>
        </View>
        <View style={styles.View_0_1090} />
        <View style={styles.View_0_1091}>
          <Text style={styles.Text_0_1091}>Aaron Pitt</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bea4/f0f8/0587fe8c0ed6c01e407eacdbe6029dad"
          }}
          style={styles.ImageBackground_0_1092}
        />
      </View>
      <View style={styles.View_0_1094}>
        <View style={styles.View_0_1095} />
        <View style={styles.View_0_1096}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e54/fef5/f674f8ef868389a37a08125ab880dc8e"
            }}
            style={styles.ImageBackground_I0_1096_0_5151}
          />
          <View style={styles.View_I0_1096_0_5152}>
            <View style={styles.View_I0_1096_0_5152_0_5689} />
          </View>
        </View>
        <View style={styles.View_0_1097} />
        <View style={styles.View_0_1098}>
          <Text style={styles.Text_0_1098}>Amelia Bong</Text>
        </View>
        <View style={styles.View_0_1099}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c8b/5473/1ab181e0caa8f2184c040ea316b2b279"
            }}
            style={styles.ImageBackground_0_1100}
          />
          <View style={styles.View_0_1101}>
            <Text style={styles.Text_0_1101}>AB</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_1102}>
        <View style={styles.View_0_1103} />
        <View style={styles.View_0_1104}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e54/fef5/f674f8ef868389a37a08125ab880dc8e"
            }}
            style={styles.ImageBackground_I0_1104_0_5151}
          />
          <View style={styles.View_I0_1104_0_5152}>
            <View style={styles.View_I0_1104_0_5152_0_5689} />
          </View>
        </View>
        <View style={styles.View_0_1105}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75d5/0ee8/435936332cd347f9d7c4da26b225213b"
            }}
            style={styles.ImageBackground_I0_1105_0_5043}
          />
          <View style={styles.View_I0_1105_0_5044}>
            <View style={styles.View_I0_1105_0_5044_0_5689} />
          </View>
        </View>
        <View style={styles.View_0_1106} />
        <View style={styles.View_0_1107}>
          <Text style={styles.Text_0_1107}>Amy Mitchel</Text>
        </View>
        <View style={styles.View_0_1108}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de03/9545/ae2057976142d7700402bc7be71f82bf"
            }}
            style={styles.ImageBackground_0_1109}
          />
          <View style={styles.View_0_1110}>
            <Text style={styles.Text_0_1110}>AM</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_1111}>
        <View style={styles.View_0_1112} />
        <View style={styles.View_0_1113}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e54/fef5/f674f8ef868389a37a08125ab880dc8e"
            }}
            style={styles.ImageBackground_I0_1113_0_5151}
          />
          <View style={styles.View_I0_1113_0_5152}>
            <View style={styles.View_I0_1113_0_5152_0_5689} />
          </View>
        </View>
        <View style={styles.View_0_1114}>
          <Text style={styles.Text_0_1114}>A</Text>
        </View>
        <View style={styles.View_0_1115} />
        <View style={styles.View_0_1116}>
          <Text style={styles.Text_0_1116}>Alice Doe</Text>
        </View>
        <View style={styles.View_0_1117}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d886/635f/434fd3c1407f58026a6b8abe36380745"
            }}
            style={styles.ImageBackground_0_1118}
          />
          <View style={styles.View_0_1119}>
            <Text style={styles.Text_0_1119}>AD</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_1120}>
        <Text style={styles.Text_0_1120}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</Text>
      </View>
      <View style={styles.View_0_1121}>
        <Text style={styles.Text_0_1121}>Contacts</Text>
      </View>
      <View style={styles.View_0_1122}>
        <Text style={styles.Text_0_1122}>69</Text>
      </View>
      <View style={styles.View_0_1123}>
        <View style={styles.View_0_1124} />
        <View style={styles.View_0_1125}>
          <View style={styles.View_I0_1125_0_4948} />
          <View style={styles.View_I0_1125_0_4949} />
          <View style={styles.View_I0_1125_0_4950}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f3b/e2fe/6ea0c2a3f45b57a1b0f3679d7e6702a4"
              }}
              style={styles.ImageBackground_I0_1125_0_4950_0_5395}
            />
            <View style={styles.View_I0_1125_0_4950_0_5397}>
              <View style={styles.View_I0_1125_0_4950_0_5397_0_5697} />
            </View>
          </View>
          <View style={styles.View_I0_1125_0_4951}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12f6/e5e2/20fe1fe0937b0030ec7cb15d1df5ee51"
              }}
              style={styles.ImageBackground_I0_1125_0_4951_0_5229}
            />
            <View style={styles.View_I0_1125_0_4951_0_5230}>
              <View style={styles.View_I0_1125_0_4951_0_5230_0_4963} />
            </View>
          </View>
          <View style={styles.View_I0_1125_0_4952}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71ed/97a1/da893e6a43849485a8ce320bd7c525c6"
              }}
              style={styles.ImageBackground_I0_1125_0_4952_0_5111}
            />
            <View style={styles.View_I0_1125_0_4952_0_5114}>
              <View style={styles.View_I0_1125_0_4952_0_5114_0_4963} />
            </View>
          </View>
          <View style={styles.View_I0_1125_0_4953}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c6d/0f78/2d571228c3f320769abb8100ec06f8d1"
              }}
              style={styles.ImageBackground_I0_1125_0_4953_0_5541}
            />
            <View style={styles.View_I0_1125_0_4953_0_5542}>
              <View style={styles.View_I0_1125_0_4953_0_5542_0_4963} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_1126}>
        <View style={styles.View_I0_1126_0_5763} />
        <View style={styles.View_I0_1126_0_5764}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae93/cb31/6761f7b5bc672720fd4048f6097ef73e"
            }}
            style={styles.ImageBackground_I0_1126_0_5764_0_5073}
          />
          <View style={styles.View_I0_1126_0_5764_0_5074}>
            <View style={styles.View_I0_1126_0_5764_0_5074_0_4963} />
          </View>
        </View>
        <View style={styles.View_I0_1126_0_5766}>
          <Text style={styles.Text_I0_1126_0_5766}> </Text>
        </View>
        <View style={styles.View_I0_1126_0_5768}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/356f/d3a4/54158a0a2323fa83fa7cf77c2dcb2103"
            }}
            style={styles.ImageBackground_I0_1126_0_5768_0_5265}
          />
          <View style={styles.View_I0_1126_0_5768_0_5266}>
            <View style={styles.View_I0_1126_0_5768_0_5266_0_4963} />
          </View>
        </View>
      </View>
      <View style={styles.View_0_1127}>
        <View style={styles.View_I0_1127_0_5913} />
      </View>
      <View style={styles.View_0_1128}>
        <View style={styles.View_I0_1128_0_5883}>
          <View style={styles.View_I0_1128_0_5884} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
            }}
            style={styles.ImageBackground_I0_1128_0_5885}
          />
          <View style={styles.View_I0_1128_0_5886} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
          }}
          style={styles.ImageBackground_I0_1128_0_5889}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
          }}
          style={styles.ImageBackground_I0_1128_0_5893}
        />
        <View style={styles.View_I0_1128_0_5896}>
          <Text style={styles.Text_I0_1128_0_5896}>9:41</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_1059: {
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
  View_0_1060: {
    width: 257,
    minWidth: 257,
    minHeight: 253,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: -25
  },
  Text_0_1060: {
    color: "rgba(241, 248, 252, 1)",
    fontSize: 202,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1061: {
    flexGrow: 1,
    width: 375,
    height: 79,
    minHeight: 79,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 667
  },
  View_0_1062: {
    width: 375,
    height: 79,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_1063: {
    width: 22,
    minWidth: 22,
    height: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 303,
    top: 29,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1063_0_5151: {
    flexGrow: 1,
    width: 17.67509651184082,
    height: 17.70796012878418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.115234375,
    top: 2.1153564453125
  },
  View_I0_1063_0_5152: {
    flexGrow: 1,
    width: 17.67509651184082,
    height: 17.70796012878418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.115234375,
    top: 2.1153564453125,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1063_0_5152_0_5689: {
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
  View_0_1064: {
    flexGrow: 1,
    width: 295,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 78,
    backgroundColor: "rgba(241, 243, 248, 1)"
  },
  View_0_1065: {
    width: 88,
    minWidth: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 30.5999755859375
  },
  Text_0_1065: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1066: {
    width: 48,
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 15
  },
  ImageBackground_0_1067: {
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
  View_0_1068: {
    width: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.5,
    top: 14
  },
  Text_0_1068: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1069: {
    flexGrow: 1,
    width: 375,
    height: 79,
    minHeight: 79,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 588
  },
  View_0_1070: {
    width: 375,
    height: 79,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_1071: {
    width: 22,
    minWidth: 22,
    height: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 303,
    top: 29,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1071_0_5151: {
    flexGrow: 1,
    width: 17.67509651184082,
    height: 17.70796012878418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.115234375,
    top: 2.1153564453125
  },
  View_I0_1071_0_5152: {
    flexGrow: 1,
    width: 17.67509651184082,
    height: 17.70796012878418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.115234375,
    top: 2.1153564453125,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1071_0_5152_0_5689: {
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
  View_0_1072: {
    flexGrow: 1,
    width: 295,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 78,
    backgroundColor: "rgba(241, 243, 248, 1)"
  },
  View_0_1073: {
    width: 104,
    minWidth: 104,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 30.5999755859375
  },
  Text_0_1073: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1074: {
    width: 48,
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 15
  },
  ImageBackground_0_1075: {
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
  View_0_1076: {
    width: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 14
  },
  Text_0_1076: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1077: {
    flexGrow: 1,
    width: 375,
    height: 79,
    minHeight: 79,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 509
  },
  View_0_1078: {
    width: 375,
    height: 79,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_1079: {
    width: 22,
    minWidth: 22,
    height: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 303,
    top: 29,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1079_0_5151: {
    flexGrow: 1,
    width: 17.67509651184082,
    height: 17.70796012878418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.115234375,
    top: 2.1153564453125
  },
  View_I0_1079_0_5152: {
    flexGrow: 1,
    width: 17.67509651184082,
    height: 17.70796012878418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.115234375,
    top: 2.1153564453125,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1079_0_5152_0_5689: {
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
  View_0_1080: {
    width: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 31.5999755859375
  },
  Text_0_1080: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1081: {
    flexGrow: 1,
    width: 295,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 78,
    backgroundColor: "rgba(241, 243, 248, 1)"
  },
  View_0_1082: {
    width: 78,
    minWidth: 78,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 30.5999755859375
  },
  Text_0_1082: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1083: {
    width: 48,
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 15
  },
  ImageBackground_0_1084: {
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
  View_0_1085: {
    width: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 14
  },
  Text_0_1085: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1086: {
    flexGrow: 1,
    width: 375,
    height: 79,
    minHeight: 79,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 430
  },
  View_0_1087: {
    width: 375,
    height: 79,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_1088: {
    width: 22,
    minWidth: 22,
    height: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 303,
    top: 29,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1088_0_5151: {
    flexGrow: 1,
    width: 17.67509651184082,
    height: 17.70796012878418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.115234375,
    top: 2.1153564453125
  },
  View_I0_1088_0_5152: {
    flexGrow: 1,
    width: 17.67509651184082,
    height: 17.70796012878418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.115234375,
    top: 2.1153564453125,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1088_0_5152_0_5689: {
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
  View_0_1089: {
    width: 22,
    minWidth: 22,
    height: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 261,
    top: 29,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1089_0_5043: {
    flexGrow: 1,
    width: 20.30769157409668,
    height: 13.538460731506348,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.84619140625,
    top: 4.23077392578125
  },
  View_I0_1089_0_5044: {
    flexGrow: 1,
    width: 20.30769157409668,
    height: 13.538460731506348,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.84619140625,
    top: 4.23077392578125,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1089_0_5044_0_5689: {
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
  View_0_1090: {
    flexGrow: 1,
    width: 295,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 78,
    backgroundColor: "rgba(241, 243, 248, 1)"
  },
  View_0_1091: {
    width: 75,
    minWidth: 75,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 30.5999755859375
  },
  Text_0_1091: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1092: {
    width: 48,
    minWidth: 48,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 15
  },
  View_0_1094: {
    flexGrow: 1,
    width: 375,
    height: 79,
    minHeight: 79,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 351
  },
  View_0_1095: {
    width: 375,
    height: 79,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_1096: {
    width: 22,
    minWidth: 22,
    height: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 303,
    top: 29,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1096_0_5151: {
    flexGrow: 1,
    width: 17.67509651184082,
    height: 17.70796012878418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.115234375,
    top: 2.1153564453125
  },
  View_I0_1096_0_5152: {
    flexGrow: 1,
    width: 17.67509651184082,
    height: 17.70796012878418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.115234375,
    top: 2.1153564453125,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1096_0_5152_0_5689: {
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
  View_0_1097: {
    flexGrow: 1,
    width: 295,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 78,
    backgroundColor: "rgba(241, 243, 248, 1)"
  },
  View_0_1098: {
    width: 95,
    minWidth: 95,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 30.5999755859375
  },
  Text_0_1098: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1099: {
    width: 48,
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 15
  },
  ImageBackground_0_1100: {
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
  View_0_1101: {
    width: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 14
  },
  Text_0_1101: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1102: {
    flexGrow: 1,
    width: 375,
    height: 79,
    minHeight: 79,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 272
  },
  View_0_1103: {
    width: 375,
    height: 79,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_1104: {
    width: 22,
    minWidth: 22,
    height: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 303,
    top: 29,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1104_0_5151: {
    flexGrow: 1,
    width: 17.67509651184082,
    height: 17.70796012878418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.115234375,
    top: 2.1153564453125
  },
  View_I0_1104_0_5152: {
    flexGrow: 1,
    width: 17.67509651184082,
    height: 17.70796012878418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.115234375,
    top: 2.1153564453125,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1104_0_5152_0_5689: {
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
  View_0_1105: {
    width: 22,
    minWidth: 22,
    height: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 261,
    top: 29,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1105_0_5043: {
    flexGrow: 1,
    width: 20.30769157409668,
    height: 13.538460731506348,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.84619140625,
    top: 4.230712890625
  },
  View_I0_1105_0_5044: {
    flexGrow: 1,
    width: 20.30769157409668,
    height: 13.538460731506348,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.84619140625,
    top: 4.230712890625,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1105_0_5044_0_5689: {
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
  View_0_1106: {
    flexGrow: 1,
    width: 295,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 78,
    backgroundColor: "rgba(241, 243, 248, 1)"
  },
  View_0_1107: {
    width: 93,
    minWidth: 93,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 30.5999755859375
  },
  Text_0_1107: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1108: {
    width: 48,
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 15
  },
  ImageBackground_0_1109: {
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
  View_0_1110: {
    width: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 14
  },
  Text_0_1110: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1111: {
    flexGrow: 1,
    width: 375,
    height: 79,
    minHeight: 79,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 193
  },
  View_0_1112: {
    width: 375,
    height: 79,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_1113: {
    width: 22,
    minWidth: 22,
    height: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 303,
    top: 29,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1113_0_5151: {
    flexGrow: 1,
    width: 17.67509651184082,
    height: 17.70796012878418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.115234375,
    top: 2.1153564453125
  },
  View_I0_1113_0_5152: {
    flexGrow: 1,
    width: 17.67509651184082,
    height: 17.70796012878418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.115234375,
    top: 2.1153564453125,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1113_0_5152_0_5689: {
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
  View_0_1114: {
    width: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 31.5999755859375
  },
  Text_0_1114: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1115: {
    flexGrow: 1,
    width: 295,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 78,
    backgroundColor: "rgba(241, 243, 248, 1)"
  },
  View_0_1116: {
    width: 70,
    minWidth: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 31
  },
  Text_0_1116: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1117: {
    width: 48,
    height: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 15
  },
  ImageBackground_0_1118: {
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
  View_0_1119: {
    width: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 14
  },
  Text_0_1119: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1120: {
    width: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 355,
    top: 196.9000244140625
  },
  Text_0_1120: {
    color: "rgba(205, 205, 215, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1121: {
    width: 119,
    minWidth: 119,
    minHeight: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 136
  },
  Text_0_1121: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 31,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1122: {
    width: 20,
    minWidth: 20,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 169,
    top: 147
  },
  Text_0_1122: {
    color: "rgba(205, 205, 215, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1123: {
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
  View_0_1124: {
    width: 375,
    height: 74,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_1125: {
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
  View_I0_1125_0_4948: {
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
  View_I0_1125_0_4949: {
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
  View_I0_1125_0_4950: {
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
  ImageBackground_I0_1125_0_4950_0_5395: {
    flexGrow: 1,
    width: 16.923076629638672,
    height: 16.923076629638672,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.53857421875,
    top: 1.5384521484375
  },
  View_I0_1125_0_4950_0_5397: {
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
  View_I0_1125_0_4950_0_5397_0_5697: {
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
  View_I0_1125_0_4951: {
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
  ImageBackground_I0_1125_0_4951_0_5229: {
    flexGrow: 1,
    width: 15.387555122375488,
    height: 16.928056716918945,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.3076171875,
    top: 1.5384521484375
  },
  View_I0_1125_0_4951_0_5230: {
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
  View_I0_1125_0_4951_0_5230_0_4963: {
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
  View_I0_1125_0_4952: {
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
  ImageBackground_I0_1125_0_4952_0_5111: {
    flexGrow: 1,
    width: 15.38427734375,
    height: 15.3846435546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.3076171875,
    top: 2.30767822265625
  },
  View_I0_1125_0_4952_0_5114: {
    flexGrow: 1,
    width: 15.38427734375,
    height: 15.3846435546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.3076171875,
    top: 2.30767822265625,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1125_0_4952_0_5114_0_4963: {
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
  View_I0_1125_0_4953: {
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
  ImageBackground_I0_1125_0_4953_0_5541: {
    flexGrow: 1,
    width: 16.9228515625,
    height: 16.923095703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.53857421875,
    top: 1.5384521484375
  },
  View_I0_1125_0_4953_0_5542: {
    flexGrow: 1,
    width: 16.9228515625,
    height: 16.923095703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.53857421875,
    top: 1.5384521484375,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1125_0_4953_0_5542_0_4963: {
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
  View_0_1126: {
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
  View_I0_1126_0_5763: {
    flexGrow: 1,
    width: 375,
    height: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_1126_0_5764: {
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
  ImageBackground_I0_1126_0_5764_0_5073: {
    flexGrow: 1,
    width: 16.153846740722656,
    height: 16.153846740722656,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.9228515625,
    top: 1.923095703125
  },
  View_I0_1126_0_5764_0_5074: {
    flexGrow: 1,
    width: 16.153846740722656,
    height: 16.153846740722656,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.9228515625,
    top: 1.923095703125,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1126_0_5764_0_5074_0_4963: {
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
  View_I0_1126_0_5766: {
    flexGrow: 1,
    width: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 27.5999755859375
  },
  Text_I0_1126_0_5766: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1126_0_5768: {
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
  ImageBackground_I0_1126_0_5768_0_5265: {
    flexGrow: 1,
    width: 7.692307472229004,
    height: 13.076922416687012,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.76904296875,
    top: 3.84619140625
  },
  View_I0_1126_0_5768_0_5266: {
    flexGrow: 1,
    width: 7.692307472229004,
    height: 13.076922416687012,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.76904296875,
    top: 3.84619140625,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1126_0_5768_0_5266_0_4963: {
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
  View_0_1127: {
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
  View_I0_1127_0_5913: {
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
  View_0_1128: {
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
  View_I0_1128_0_5883: {
    flexGrow: 1,
    width: 24.32803726196289,
    height: 11.333333015441895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 336,
    top: 17.3333740234375
  },
  View_I0_1128_0_5884: {
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
  ImageBackground_I0_1128_0_5885: {
    width: 1.328037977218628,
    height: 4,
    top: 3.6666259765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  View_I0_1128_0_5886: {
    width: 18,
    height: 7.333333492279053,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I0_1128_0_5889: {
    flexGrow: 1,
    width: 15.27237606048584,
    height: 10.965571403503418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 315.69384765625,
    top: 17.3306884765625
  },
  ImageBackground_I0_1128_0_5893: {
    flexGrow: 1,
    width: 17,
    height: 10.666666984558105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.66650390625,
    top: 17.6666259765625
  },
  View_I0_1128_0_5896: {
    flexGrow: 1,
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 13.5999755859375
  },
  Text_I0_1128_0_5896: {
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
