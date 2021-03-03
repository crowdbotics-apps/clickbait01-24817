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
      <View style={styles.View_0_733} />
      <View style={styles.View_0_734}>
        <View style={styles.View_0_735} />
        <View style={styles.View_0_736}>
          <View style={styles.View_0_737} />
          <View style={styles.View_0_738}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1c9/a07a/6eee2527d98fef6b3a7d5e97c353e4ed"
              }}
              style={styles.ImageBackground_I0_738_0_5604}
            />
            <View style={styles.View_I0_738_0_5605}>
              <View style={styles.View_I0_738_0_5605_0_5681} />
            </View>
          </View>
        </View>
        <View style={styles.View_0_739} />
        <View style={styles.View_0_740}>
          <View style={styles.View_0_741}>
            <Text style={styles.Text_0_741}>Landon</Text>
          </View>
          <View style={styles.View_0_742}>
            <Text style={styles.Text_0_742}>liked your post</Text>
          </View>
          <View style={styles.View_0_743}>
            <Text style={styles.Text_0_743}>AUG 11 20:14</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c01/e1c6/8534a96b1bd5b5d4280023b704b7d746"
          }}
          style={styles.ImageBackground_0_744}
        />
        <View style={styles.View_0_745}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2930/18d1/859eb51994efb12ef645c00213e3214d"
            }}
            style={styles.ImageBackground_0_746}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f262/9444/a8531c596740696f6fa0191e35a9a349"
            }}
            style={styles.ImageBackground_0_747}
          />
          <View style={styles.View_0_748}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8299/cd26/357a731e8d05f5309a0d849c7fcf6ff4"
              }}
              style={styles.ImageBackground_I0_748_0_5076}
            />
            <View style={styles.View_I0_748_0_5077}>
              <View style={styles.View_I0_748_0_5077_0_5681} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_749}>
        <View style={styles.View_0_750} />
        <View style={styles.View_0_751} />
        <View style={styles.View_0_752}>
          <View style={styles.View_0_753}>
            <Text style={styles.Text_0_753}>Helena</Text>
          </View>
          <View style={styles.View_0_754}>
            <Text style={styles.Text_0_754}>sent you a gift</Text>
          </View>
          <View style={styles.View_0_755}>
            <Text style={styles.Text_0_755}>Aug 20 10:20</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31a7/ece4/67074fa7c8fe5cc39a8bfbe8e80cddf0"
          }}
          style={styles.ImageBackground_0_756}
        />
        <View style={styles.View_0_757}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2930/18d1/859eb51994efb12ef645c00213e3214d"
            }}
            style={styles.ImageBackground_0_758}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cf6/7c93/0a763a39f7d7717d9513f2db2cbd9b7c"
            }}
            style={styles.ImageBackground_0_759}
          />
          <View style={styles.View_0_760}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b95/b370/1636956d3a81fb55809c233722d0f09b"
              }}
              style={styles.ImageBackground_I0_760_0_5364}
            />
            <View style={styles.View_I0_760_0_5368}>
              <View style={styles.View_I0_760_0_5368_0_5681} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_761}>
        <View style={styles.View_0_762} />
        <View style={styles.View_0_763}>
          <View style={styles.View_I0_763_0_5825} />
          <View style={styles.View_I0_763_0_5826}>
            <View style={styles.View_I0_763_0_5826_0_5695} />
          </View>
          <View style={styles.View_I0_763_0_5827}>
            <Text style={styles.Text_I0_763_0_5827}>Follow</Text>
          </View>
        </View>
        <View style={styles.View_0_764} />
        <View style={styles.View_0_765}>
          <View style={styles.View_0_766}>
            <Text style={styles.Text_0_766}>Andrea</Text>
          </View>
          <View style={styles.View_0_767}>
            <Text style={styles.Text_0_767}>follow you</Text>
          </View>
          <View style={styles.View_0_768}>
            <Text style={styles.Text_0_768}>Yesterday 17:55</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ae9/70bf/a59d160775a03df6faf18b9aec270aba"
          }}
          style={styles.ImageBackground_0_769}
        />
        <View style={styles.View_0_770}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2930/18d1/859eb51994efb12ef645c00213e3214d"
            }}
            style={styles.ImageBackground_0_771}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e93/f85b/fb3f6edff28a2a182cda6059000d0920"
            }}
            style={styles.ImageBackground_0_772}
          />
          <View style={styles.View_0_773}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79bf/16f1/02b4a85190b6a15a7e97be356d32b06e"
              }}
              style={styles.ImageBackground_I0_773_0_5633}
            />
            <View style={styles.View_I0_773_0_5634}>
              <View style={styles.View_I0_773_0_5634_0_5681} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_774}>
        <View style={styles.View_0_775} />
        <View style={styles.View_0_776}>
          <Text style={styles.Text_0_776}>Yesterday 18:20</Text>
        </View>
        <View style={styles.View_0_777}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d63a/b0c7/acd8ed71b90bcfbbde5239c90ba83b3e"
            }}
            style={styles.ImageBackground_0_778}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a803/4522/d9741ecf7b07848709a2ec0dd335e801"
            }}
            style={styles.ImageBackground_0_779}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bade/dda7/bb064d5b42f03804431b12399e2ff3cd"
            }}
            style={styles.ImageBackground_0_780}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a1b/3ce3/e58e2c4a67a3aac84bcae997f0b61841"
            }}
            style={styles.ImageBackground_0_781}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecfa/9fe4/6a52e4202085ef0dd98fe37af8769aa4"
            }}
            style={styles.ImageBackground_0_782}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61a9/6c02/0fc0cab4c27d3972ce920dc25b84ff34"
            }}
            style={styles.ImageBackground_0_783}
          />
        </View>
        <View style={styles.View_0_784} />
        <View style={styles.View_0_785}>
          <View style={styles.View_0_786}>
            <Text style={styles.Text_0_786}>Landon</Text>
          </View>
          <View style={styles.View_0_787}>
            <Text style={styles.Text_0_787}>liked 8 your photos</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c01/e1c6/8534a96b1bd5b5d4280023b704b7d746"
          }}
          style={styles.ImageBackground_0_788}
        />
        <View style={styles.View_0_789}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2930/18d1/859eb51994efb12ef645c00213e3214d"
            }}
            style={styles.ImageBackground_0_790}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f262/9444/a8531c596740696f6fa0191e35a9a349"
            }}
            style={styles.ImageBackground_0_791}
          />
          <View style={styles.View_0_792}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8299/cd26/357a731e8d05f5309a0d849c7fcf6ff4"
              }}
              style={styles.ImageBackground_I0_792_0_5076}
            />
            <View style={styles.View_I0_792_0_5077}>
              <View style={styles.View_I0_792_0_5077_0_5681} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_793}>
        <Text style={styles.Text_0_793}>OLDEST</Text>
      </View>
      <View style={styles.View_0_794}>
        <View style={styles.View_0_795} />
        <View style={styles.View_0_796}>
          <View style={styles.View_I0_796_0_5817} />
          <View style={styles.View_I0_796_0_5818}>
            <View style={styles.View_I0_796_0_5818_0_5691} />
          </View>
          <View style={styles.View_I0_796_0_5819}>
            <Text style={styles.Text_I0_796_0_5819}>More</Text>
          </View>
        </View>
        <View style={styles.View_0_797} />
        <View style={styles.View_0_798}>
          <View style={styles.View_0_799}>
            <Text style={styles.Text_0_799}>
              August 20 at 08:10 attempt to enter your profile with
            </Text>
          </View>
        </View>
        <View style={styles.View_0_800}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b54/04e0/771cbc72f5c381b3458dbd118c2af22a"
            }}
            style={styles.ImageBackground_0_801}
          />
          <View style={styles.View_0_802}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ac1/d035/3854b1a3cea51b84191ecee015aef25d"
              }}
              style={styles.ImageBackground_I0_802_0_5675}
            />
            <View style={styles.View_I0_802_0_5677}>
              <View style={styles.View_I0_802_0_5677_0_5681} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_803}>
        <View style={styles.View_0_804} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05ce/ccef/a2fa73a099698d4f40dfaac52b182e21"
          }}
          style={styles.ImageBackground_0_805}
        />
        <View style={styles.View_0_806} />
        <View style={styles.View_0_807}>
          <View style={styles.View_0_808}>
            <Text style={styles.Text_0_808}>Landon</Text>
          </View>
          <View style={styles.View_0_809}>
            <Text style={styles.Text_0_809}>liked your post</Text>
          </View>
          <View style={styles.View_0_810}>
            <Text style={styles.Text_0_810}>2 min</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b85e/2e3d/d4a3c65483daf9da200625faf7ad4e4d"
          }}
          style={styles.ImageBackground_0_811}
        />
        <View style={styles.View_0_812}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2930/18d1/859eb51994efb12ef645c00213e3214d"
            }}
            style={styles.ImageBackground_0_813}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f262/9444/a8531c596740696f6fa0191e35a9a349"
            }}
            style={styles.ImageBackground_0_814}
          />
          <View style={styles.View_0_815}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8299/cd26/357a731e8d05f5309a0d849c7fcf6ff4"
              }}
              style={styles.ImageBackground_I0_815_0_5076}
            />
            <View style={styles.View_I0_815_0_5077}>
              <View style={styles.View_I0_815_0_5077_0_5681} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_816}>
        <Text style={styles.Text_0_816}>RECENT</Text>
      </View>
      <View style={styles.View_0_817}>
        <Text style={styles.Text_0_817}>Notifications</Text>
      </View>
      <View style={styles.View_0_818}>
        <Text style={styles.Text_0_818}>2</Text>
      </View>
      <View style={styles.View_0_819}>
        <View style={styles.View_0_820} />
        <View style={styles.View_0_821}>
          <View style={styles.View_I0_821_0_4948} />
          <View style={styles.View_I0_821_0_4949} />
          <View style={styles.View_I0_821_0_4950}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f3b/e2fe/6ea0c2a3f45b57a1b0f3679d7e6702a4"
              }}
              style={styles.ImageBackground_I0_821_0_4950_0_5395}
            />
            <View style={styles.View_I0_821_0_4950_0_5397}>
              <View style={styles.View_I0_821_0_4950_0_5397_0_4963} />
            </View>
          </View>
          <View style={styles.View_I0_821_0_4951}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12f6/e5e2/20fe1fe0937b0030ec7cb15d1df5ee51"
              }}
              style={styles.ImageBackground_I0_821_0_4951_0_5229}
            />
            <View style={styles.View_I0_821_0_4951_0_5230}>
              <View style={styles.View_I0_821_0_4951_0_5230_0_5697} />
            </View>
          </View>
          <View style={styles.View_I0_821_0_4952}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71ed/97a1/da893e6a43849485a8ce320bd7c525c6"
              }}
              style={styles.ImageBackground_I0_821_0_4952_0_5111}
            />
            <View style={styles.View_I0_821_0_4952_0_5114}>
              <View style={styles.View_I0_821_0_4952_0_5114_0_4963} />
            </View>
          </View>
          <View style={styles.View_I0_821_0_4953}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c6d/0f78/2d571228c3f320769abb8100ec06f8d1"
              }}
              style={styles.ImageBackground_I0_821_0_4953_0_5541}
            />
            <View style={styles.View_I0_821_0_4953_0_5542}>
              <View style={styles.View_I0_821_0_4953_0_5542_0_4963} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_822}>
        <View style={styles.View_I0_822_0_5913} />
      </View>
      <View style={styles.View_0_823}>
        <View style={styles.View_0_824}>
          <View style={styles.View_I0_824_0_5763} />
          <View style={styles.View_I0_824_0_5764}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89aa/357f/06a0261f6a306dc88061420bd0c7425b"
              }}
              style={styles.ImageBackground_I0_824_0_5764_0_5326}
            />
            <View style={styles.View_I0_824_0_5764_0_5328}>
              <View style={styles.View_I0_824_0_5764_0_5328_0_4963} />
            </View>
          </View>
          <View style={styles.View_I0_824_0_5766}>
            <Text style={styles.Text_I0_824_0_5766}> </Text>
          </View>
          <View style={styles.View_I0_824_0_5768}>
            <View style={styles.View_I0_824_0_5768_0_5270}>
              <View style={styles.View_I0_824_0_5768_0_5268} />
              <View style={styles.View_I0_824_0_5768_0_5269} />
              <View style={styles.View_I0_824_0_5768_0_5271} />
            </View>
            <View style={styles.View_I0_824_0_5768_0_5272}>
              <View style={styles.View_I0_824_0_5768_0_5272_0_4963} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_825}>
        <View style={styles.View_I0_825_0_5883}>
          <View style={styles.View_I0_825_0_5884} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
            }}
            style={styles.ImageBackground_I0_825_0_5885}
          />
          <View style={styles.View_I0_825_0_5886} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
          }}
          style={styles.ImageBackground_I0_825_0_5889}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
          }}
          style={styles.ImageBackground_I0_825_0_5893}
        />
        <View style={styles.View_I0_825_0_5896}>
          <Text style={styles.Text_I0_825_0_5896}>9:41</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_733: {
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
  View_0_734: {
    flexGrow: 1,
    width: 375,
    height: 68,
    minHeight: 68,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 698
  },
  View_0_735: {
    width: 375,
    height: 68,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_736: {
    width: 38,
    minWidth: 38,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 297,
    top: 15
  },
  View_0_737: {
    width: 38,
    minWidth: 38,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(205, 205, 215, 1)"
  },
  View_0_738: {
    width: 18,
    minWidth: 18,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 10,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_738_0_5604: {
    flexGrow: 1,
    width: 12.46142578125,
    height: 15.23077392578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.769287109375,
    top: 1.3846435546875
  },
  View_I0_738_0_5605: {
    flexGrow: 1,
    width: 12.46142578125,
    height: 15.23077392578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.769287109375,
    top: 1.3846435546875,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_738_0_5605_0_5681: {
    flexGrow: 1,
    width: 18,
    height: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_739: {
    flexGrow: 1,
    width: 242,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 93,
    top: 67,
    backgroundColor: "rgba(241, 243, 248, 1)"
  },
  View_0_740: {
    width: 138,
    height: 35.70000076293945,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 93,
    top: 17.79998779296875
  },
  View_0_741: {
    width: 44,
    minWidth: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1.20001220703125
  },
  Text_0_741: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_742: {
    width: 90,
    minWidth: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 48,
    top: 0
  },
  Text_0_742: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_743: {
    width: 73,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 18.70001220703125
  },
  Text_0_743: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 8,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  ImageBackground_0_744: {
    width: 38,
    minWidth: 38,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 15
  },
  View_0_745: {
    width: 21,
    minWidth: 21,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59,
    top: 34
  },
  ImageBackground_0_746: {
    width: 21,
    height: 21,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_0_747: {
    width: 17,
    height: 17,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2
  },
  View_0_748: {
    width: 9,
    minWidth: 9,
    height: 9,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6,
    top: 6,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_748_0_5076: {
    flexGrow: 1,
    width: 7.615385055541992,
    height: 6.8599419593811035,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.6923828125,
    top: 1.17694091796875
  },
  View_I0_748_0_5077: {
    flexGrow: 1,
    width: 7.615385055541992,
    height: 6.8599419593811035,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.6923828125,
    top: 1.17694091796875,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_748_0_5077_0_5681: {
    flexGrow: 1,
    width: 9,
    height: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_749: {
    flexGrow: 1,
    width: 375,
    height: 68,
    minHeight: 68,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 630
  },
  View_0_750: {
    width: 375,
    height: 68,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_751: {
    flexGrow: 1,
    width: 242,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 93,
    top: 67,
    backgroundColor: "rgba(241, 243, 248, 1)"
  },
  View_0_752: {
    width: 133,
    height: 35.70000076293945,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 93,
    top: 17.79998779296875
  },
  View_0_753: {
    width: 41,
    minWidth: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1.20001220703125
  },
  Text_0_753: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_754: {
    width: 87,
    minWidth: 87,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 46,
    top: 0
  },
  Text_0_754: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_755: {
    width: 78,
    minWidth: 78,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 18.70001220703125
  },
  Text_0_755: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 8,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  ImageBackground_0_756: {
    width: 38,
    minWidth: 38,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 15
  },
  View_0_757: {
    width: 21,
    minWidth: 21,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59,
    top: 34
  },
  ImageBackground_0_758: {
    width: 21,
    height: 21,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_0_759: {
    width: 17,
    height: 17,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2
  },
  View_0_760: {
    width: 9,
    minWidth: 9,
    height: 9,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6,
    top: 6,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_760_0_5364: {
    flexGrow: 1,
    width: 9,
    height: 8.65384578704834,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_760_0_5368: {
    flexGrow: 1,
    width: 9,
    height: 8.65384578704834,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_760_0_5368_0_5681: {
    flexGrow: 1,
    width: 9,
    height: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_761: {
    flexGrow: 1,
    width: 375,
    height: 68,
    minHeight: 68,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 562
  },
  View_0_762: {
    width: 375,
    height: 68,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_763: {
    width: 70,
    minWidth: 70,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 265,
    top: 20,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_763_0_5825: {
    flexGrow: 1,
    width: 70,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I0_763_0_5826: {
    flexGrow: 1,
    width: 70,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_763_0_5826_0_5695: {
    flexGrow: 1,
    width: 70,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(100, 120, 211, 1)"
  },
  View_I0_763_0_5827: {
    flexGrow: 1,
    width: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.942626953125,
    top: 6
  },
  Text_I0_763_0_5827: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_764: {
    flexGrow: 1,
    width: 242,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 93,
    top: 67,
    backgroundColor: "rgba(241, 243, 248, 1)"
  },
  View_0_765: {
    width: 110,
    height: 35.70000076293945,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 93,
    top: 17.79998779296875
  },
  View_0_766: {
    width: 42,
    minWidth: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1.20001220703125
  },
  Text_0_766: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_767: {
    width: 63,
    minWidth: 63,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 47,
    top: 0
  },
  Text_0_767: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_768: {
    width: 102,
    minWidth: 102,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 18.70001220703125
  },
  Text_0_768: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 8,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  ImageBackground_0_769: {
    width: 38,
    minWidth: 38,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 15
  },
  View_0_770: {
    width: 21,
    minWidth: 21,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59,
    top: 34
  },
  ImageBackground_0_771: {
    width: 21,
    height: 21,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_0_772: {
    width: 17,
    height: 17,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2
  },
  View_0_773: {
    width: 13,
    minWidth: 13,
    height: 13,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4,
    top: 4,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_773_0_5633: {
    flexGrow: 1,
    width: 9.5,
    height: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    top: 3
  },
  View_I0_773_0_5634: {
    flexGrow: 1,
    width: 9.5,
    height: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    top: 3,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_773_0_5634_0_5681: {
    flexGrow: 1,
    width: 13,
    height: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_774: {
    flexGrow: 1,
    width: 375,
    height: 120,
    minHeight: 120,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 442
  },
  View_0_775: {
    width: 375,
    height: 120,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_776: {
    width: 104,
    minWidth: 104,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 93,
    top: 91.5
  },
  Text_0_776: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 8,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_0_777: {
    flexGrow: 1,
    width: 242,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 93,
    top: 43
  },
  ImageBackground_0_778: {
    width: 32,
    height: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_0_779: {
    width: 32,
    height: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_0_780: {
    width: 32,
    height: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 84,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_0_781: {
    width: 32,
    height: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 126,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_0_782: {
    width: 32,
    height: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 168,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_0_783: {
    width: 32,
    height: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 210,
    top: 0,
    resizeMode: "cover"
  },
  View_0_784: {
    flexGrow: 1,
    width: 242,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 93,
    top: 119,
    backgroundColor: "rgba(241, 243, 248, 1)"
  },
  View_0_785: {
    width: 165,
    height: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 93,
    top: 17.79998779296875
  },
  View_0_786: {
    width: 44,
    minWidth: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1.20001220703125
  },
  Text_0_786: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_787: {
    width: 117,
    minWidth: 117,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 48,
    top: 0
  },
  Text_0_787: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_788: {
    width: 38,
    minWidth: 38,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 15
  },
  View_0_789: {
    width: 21,
    minWidth: 21,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59,
    top: 34
  },
  ImageBackground_0_790: {
    width: 21,
    height: 21,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_0_791: {
    width: 17,
    height: 17,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2
  },
  View_0_792: {
    width: 9,
    minWidth: 9,
    height: 9,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6,
    top: 6,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_792_0_5076: {
    flexGrow: 1,
    width: 7.615385055541992,
    height: 6.8599419593811035,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.6923828125,
    top: 1.17694091796875
  },
  View_I0_792_0_5077: {
    flexGrow: 1,
    width: 7.615385055541992,
    height: 6.8599419593811035,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.6923828125,
    top: 1.17694091796875,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_792_0_5077_0_5681: {
    flexGrow: 1,
    width: 9,
    height: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_793: {
    width: 47,
    minWidth: 47,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 418
  },
  Text_0_793: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_794: {
    flexGrow: 1,
    width: 375,
    height: 110,
    minHeight: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 289
  },
  View_0_795: {
    width: 375,
    height: 110,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_0_796: {
    width: 77,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 93,
    top: 68,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_796_0_5817: {
    flexGrow: 1,
    width: 77,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I0_796_0_5818: {
    flexGrow: 1,
    width: 77,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_796_0_5818_0_5691: {
    flexGrow: 1,
    width: 77,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(241, 243, 248, 1)"
  },
  View_I0_796_0_5819: {
    flexGrow: 1,
    width: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23.436767578125,
    top: 6
  },
  Text_I0_796_0_5819: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_797: {
    flexGrow: 1,
    width: 242,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 93,
    top: 109,
    backgroundColor: "rgba(241, 243, 248, 1)"
  },
  View_0_798: {
    width: 218,
    height: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 93,
    top: 18.800048828125
  },
  View_0_799: {
    width: 218,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_0_799: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_800: {
    width: 38,
    height: 38,
    top: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40
  },
  ImageBackground_0_801: {
    width: 38,
    minWidth: 38,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_0_802: {
    width: 14,
    minWidth: 14,
    height: 14,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12,
    top: 12,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_802_0_5675: {
    flexGrow: 1,
    width: 11.846153259277344,
    height: 11.846153259277344,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.076904296875,
    top: 1.076904296875
  },
  View_I0_802_0_5677: {
    flexGrow: 1,
    width: 11.846153259277344,
    height: 11.846153259277344,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.076904296875,
    top: 1.076904296875,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_802_0_5677_0_5681: {
    flexGrow: 1,
    width: 14,
    height: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_803: {
    flexGrow: 1,
    width: 375,
    height: 68,
    minHeight: 68,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 221
  },
  View_0_804: {
    width: 375,
    height: 68,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_0_805: {
    width: 38,
    minWidth: 38,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 297,
    top: 15,
    resizeMode: "cover"
  },
  View_0_806: {
    flexGrow: 1,
    width: 242,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 93,
    top: 67,
    backgroundColor: "rgba(241, 243, 248, 1)"
  },
  View_0_807: {
    width: 138,
    height: 35.70000076293945,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 93,
    top: 17.800048828125
  },
  View_0_808: {
    width: 44,
    minWidth: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1.199951171875
  },
  Text_0_808: {
    color: "rgba(100, 120, 211, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_809: {
    width: 90,
    minWidth: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 48,
    top: 0
  },
  Text_0_809: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_810: {
    width: 35,
    minWidth: 35,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 18.699951171875
  },
  Text_0_810: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 8,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  ImageBackground_0_811: {
    width: 38,
    minWidth: 38,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 15
  },
  View_0_812: {
    width: 21,
    minWidth: 21,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59,
    top: 34
  },
  ImageBackground_0_813: {
    width: 21,
    height: 21,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_0_814: {
    width: 17,
    height: 17,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2
  },
  View_0_815: {
    width: 9,
    minWidth: 9,
    height: 9,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6,
    top: 6,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_815_0_5076: {
    flexGrow: 1,
    width: 7.615385055541992,
    height: 6.8599419593811035,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.6923828125,
    top: 1.1768798828125
  },
  View_I0_815_0_5077: {
    flexGrow: 1,
    width: 7.615385055541992,
    height: 6.8599419593811035,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.6923828125,
    top: 1.1768798828125,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_815_0_5077_0_5681: {
    flexGrow: 1,
    width: 9,
    height: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_816: {
    width: 47,
    minWidth: 47,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 202
  },
  Text_0_816: {
    color: "rgba(141, 146, 163, 1)",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_817: {
    width: 172,
    minWidth: 172,
    minHeight: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 136
  },
  Text_0_817: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 31,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_818: {
    width: 10,
    minWidth: 10,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 222,
    top: 147
  },
  Text_0_818: {
    color: "rgba(205, 205, 215, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_819: {
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
  View_0_820: {
    width: 375,
    height: 74,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_821: {
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
  View_I0_821_0_4948: {
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
  View_I0_821_0_4949: {
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
  View_I0_821_0_4950: {
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
  ImageBackground_I0_821_0_4950_0_5395: {
    flexGrow: 1,
    width: 16.923076629638672,
    height: 16.923076629638672,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.53857421875,
    top: 1.5384521484375
  },
  View_I0_821_0_4950_0_5397: {
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
  View_I0_821_0_4950_0_5397_0_4963: {
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
  View_I0_821_0_4951: {
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
  ImageBackground_I0_821_0_4951_0_5229: {
    flexGrow: 1,
    width: 15.387555122375488,
    height: 16.928056716918945,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.3076171875,
    top: 1.5384521484375
  },
  View_I0_821_0_4951_0_5230: {
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
  View_I0_821_0_4951_0_5230_0_5697: {
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
  View_I0_821_0_4952: {
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
  ImageBackground_I0_821_0_4952_0_5111: {
    flexGrow: 1,
    width: 15.384613990783691,
    height: 15.384613990783691,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.3076171875,
    top: 2.30767822265625
  },
  View_I0_821_0_4952_0_5114: {
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
  View_I0_821_0_4952_0_5114_0_4963: {
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
  View_I0_821_0_4953: {
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
  ImageBackground_I0_821_0_4953_0_5541: {
    flexGrow: 1,
    width: 16.923076629638672,
    height: 16.923076629638672,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.53857421875,
    top: 1.5384521484375
  },
  View_I0_821_0_4953_0_5542: {
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
  View_I0_821_0_4953_0_5542_0_4963: {
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
  View_0_822: {
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
  View_I0_822_0_5913: {
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
  View_0_823: {
    flexGrow: 1,
    width: 375,
    height: 72,
    minHeight: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 44
  },
  View_0_824: {
    flexGrow: 1,
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
  View_I0_824_0_5763: {
    flexGrow: 1,
    width: 375,
    height: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I0_824_0_5764: {
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
  ImageBackground_I0_824_0_5764_0_5326: {
    flexGrow: 1,
    width: 3.8461532592773438,
    height: 16.153846740722656,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.076904296875,
    top: 1.923095703125
  },
  View_I0_824_0_5764_0_5328: {
    flexGrow: 1,
    width: 3.8461532592773438,
    height: 16.153846740722656,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.076904296875,
    top: 1.923095703125,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_824_0_5764_0_5328_0_4963: {
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
  View_I0_824_0_5766: {
    flexGrow: 1,
    width: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 27.5999755859375
  },
  Text_I0_824_0_5766: {
    color: "rgba(34, 36, 42, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_824_0_5768: {
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
  View_I0_824_0_5768_0_5270: {
    flexGrow: 1,
    width: 18.46142578125,
    height: 11.5384521484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.769287109375,
    top: 4.6153564453125
  },
  View_I0_824_0_5768_0_5268: {
    width: 9.230768203735352,
    height: 2.307692527770996,
    top: 9.230712890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.230712890625,
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  View_I0_824_0_5768_0_5269: {
    width: 18.461538314819336,
    height: 2.307692527770996,
    top: 4.6153564453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  View_I0_824_0_5768_0_5271: {
    width: 9.230769157409668,
    height: 2.307692527770996,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  View_I0_824_0_5768_0_5272: {
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
  View_I0_824_0_5768_0_5272_0_4963: {
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
  View_0_825: {
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
  View_I0_825_0_5883: {
    flexGrow: 1,
    width: 24.32803726196289,
    height: 11.333333015441895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 336,
    top: 17.3333740234375
  },
  View_I0_825_0_5884: {
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
  ImageBackground_I0_825_0_5885: {
    width: 1.328037977218628,
    height: 4,
    top: 3.6666259765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  View_I0_825_0_5886: {
    width: 18,
    height: 7.333333492279053,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I0_825_0_5889: {
    flexGrow: 1,
    width: 15.27237606048584,
    height: 10.965571403503418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 315.69384765625,
    top: 17.3306884765625
  },
  ImageBackground_I0_825_0_5893: {
    flexGrow: 1,
    width: 17,
    height: 10.666666984558105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.666748046875,
    top: 17.6666259765625
  },
  View_I0_825_0_5896: {
    flexGrow: 1,
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 13.5999755859375
  },
  Text_I0_825_0_5896: {
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
