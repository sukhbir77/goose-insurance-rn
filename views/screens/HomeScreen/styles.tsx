import { Dimensions, Platform, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: '#EFEFEF'
  },
  childTopContainer: {
    flex: 2,
    backgroundColor: '#D5398D',
  },
  childBottomContainer: {
    flex: 2,
    backgroundColor: '#EFEFEF',
    justifyContent: 'flex-end',
    marginBottom: 20,
    alignItems: 'center',
  },
  flagCanadaContainer: {
    alignItems: "flex-end",
    marginTop: "10%",
    marginRight: 15
  },
  flagCanada: {
    resizeMode: 'contain',
    height: 30,
    width: 40,
  },
  gooseLogoContainer: {
    flex: 1,
    alignItems: "center"
  },
  gooseLogo: {
    resizeMode: 'contain',
    height: 70,
    width: '70%',
  },
  insuranceLogoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  footerTextOne: {
    fontSize: 11,
    color: '#6C6C81',
  },
  footerTextTwo: {
    fontSize: 8,
    color: '#6C6C81',
  },
  loginContainer: {
    position: "absolute",
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center',
    zIndex: 1,
  }, 
  loginContainerChild: {
    height: "40%",
    width: "80%",
    backgroundColor: "#FFFFFF",
    borderRadius: 30, 
  }
});

export default styles;
