import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        common: {
            black: 'rgba(51, 51, 51, 1)',
            white: '#fff'
        },
        background: {
            paper: 'rgba(246, 246, 246, 1)',
            default: '#fafafa',
            gray: '#f5f5f5',
            backgroundGrey: "#E5E5E5",
            alternatePaper:"rgba(6, 43, 113, 0.08)",
            alternateBackground:"#4C4C4C"
        },
        // primary: {main: '#174397', contrastText: 'rgba(23, 67, 151, 0.08)'},
        primary: {
            light: "rgba(151,192,168, 0.5)",
            main: "rgba(44, 122,123, 1)",
            dark: "rgba(44, 122,123, 1)",
            contrastText: "#fff",
        },
        secondary: {
            light: "rgba(48, 63, 159, 1)",
            main: "rgba(255, 255, 255, 1)",
            dark: "rgb(233,233,233)",
            contrastText: "rgba(48, 63, 159, 1)",
        },
        yellow:{
          light: '#fed54d',
          main: '#F2C94C',
        },
        // secondary: {main: '#3D6FD0'},
        error: {
            light: "#e57373",
            main: "#EB5757",
            dark: "#b63c3f",
            contrastText: "#fff",            
        },
        text: {
            primary: "#333333",
            secondary: "#555555",
            disabled: "rgba(214, 214, 214, 1)",
            hint: "rgba(128, 128, 128, 1)",
        },
        blue: { main: '#3D6FD0', light: '#2aa7f5', background: 'rgba(23, 67, 151, 0.08)' },
        dark: { main: '#333333' },
        light: { main: '#555555' },
        ash: { main: '#808080' },
        ashLightest: { main: "#E7E7E7" },
        border: { main: '#4f4f4f' },
        offWhite: { main: '#F5F5F5' },
        navyBlue: { main: '#174397' },
        red: { main: '#E33636' },
        success: { main: '#28990B' },
        premium: '#D47632',
        action: {
            active: "#174397",
            hover: "rgba(0, 0, 0, 0.04)",
            hoverOpacity: 0.04,
            selected: "rgba(0, 0, 0, 0.08)",
            selectedOpacity: 0.08,
            disabled: "rgba(0, 0, 0, 0.26)",
            disabledBackground: "rgba(0, 0, 0, 0.12)",
            disabledOpacity: 0.38,
            focus: "rgba(0, 0, 0, 0.12)",
            focusOpacity: 0.12,
            activatedOpacity: 0.12,
        }
    },
    typography: {
            htmlFontSize: 16,
            fontFamily: "'Work Sans', sans-serif",
            fontSize: 14,
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 500,
            fontWeightBold: 700,
            h1: {
                fontFamily: "'Work Sans', sans-serif",
                fontWeight: 500,
                fontSize: '2.5rem',
                lineHeight: 1.167,
                letterSpacing: "-0.02em",
            },
            h2:{
                fontFamily: "'Work Sans', sans-serif",
                fontWeight: 500,
                fontSize: '2rem',
                lineHeight: 1.167,
                letterSpacing: "-0.01em",
            },
            h3:{
                fontFamily: "'Work Sans', sans-serif",
                fontWeight: 500,
                fontSize: '1.5rem',
                lineHeight: 1.167,
            },
            h4:{
                fontFamily: "'Work Sans', sans-serif",
                fontWeight: 500,
                fontSize: '1.3rem',
            },
            h5:{
                fontFamily: "'Work Sans', sans-serif",
                fontWeight: 500,
                fontSize: '1.2rem',
            },
            h6:{
                fontFamily: "'Work Sans', sans-serif",
                fontWeight: 500,
                fontSize: '1.1rem',
            },
            body1: {
                fontWeight: 500,
                fontSize: '1rem',
                letterSpacing: '0.01em',
            },
            body2: {
                fontWeight: 'normal',
                fontSize: '1rem',
                letterSpacing: '0.01em',
                lineHeight: '140%',
                wordBreak:'break-word'
            },
            subtitle1: {
                fontWeight: 500,
                fontSize: '0.9rem',
                letterSpacing: '0.01em',
                color: '#555555',
            },
            subtitle2: {
                fontWeight: 400,
                fontSize: '0.9rem',
                letterSpacing: '0.01em',
            },
            caption: {
                fontWeight: 500,
                fontSize: '0.8rem',
                letterSpacing: '0.01em',
            },

    },
    spacing: (fact) =>{
        return fact * 4;
    },
    pxTOvh:(fact)=>{
        return `${100*(fact*4)/window.innerHeight}vh` 
    },
    pxTOvw:(fact)=>{
        return `${100*(fact*4)/window.innerWidth}vw` 
    },

    shape: {
        borderRadius: 4,
    },
    zIndex:{
        mobileStepper: 1000,
        speedDial: 1050,
        appBar: 1100,
        drawer: 1200,
        modal: 1300,
        snackbar: 1400,
        tooltip: 1500,
    },
    MuiTypography: {
        body1: {
            fontWeight: 500,
            fontSize: 16,
            letterSpacing: '0.01em',
        },
        body2: {
            fontWeight: 400,
            fontSize: 16,
            letterSpacing: '0.01em',
        },
        subtitle1: {
            fontWeight: 500,
            fontSize: 14,
            letterSpacing: '0.01em',
            color: '#555555',
        },
        subtitle2: {
            fontWeight: 400,
            fontSize: 14,
            letterSpacing: '0.01em',
        },
        caption: {
            fontWeight: 500,
            fontSize: 12,
            letterSpacing: '0.01em',
        },
        labelMicroRegular: {
            fontWeight: 400,
            fontSize: 12,
            letterSpacing: '0.01em',
        },
    },
    overrides:{
        MuiAvatar: {
            circle:{
                // backgroundColor: 'rgba(23, 67, 151, 0.08)',
                // color: '#174397',
            },
            rounded: {
                // backgroundColor: 'rgba(23, 67, 151, 0.08)',
                // color: '#174397'
            },

        },
        MuiButton:{
            root:{
                padding: '14px',
                lineHeight: '1.35',
                fontSize: '14px',
            },
            outlined:{
                padding: '14px',
            },
            contained:{
                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.16)',
                '&.Mui-disabled':{
                        color: '#fff',
                        backgroundColor: '#D6D6D6',
                }
            },
          outlinedPrimary:{
              background: 'white',
              border: '1px solid #174397',
              // '&:active':{
              //     backgroundColor: 'rgba(23, 67, 151, 1) !important',
              //     borderColor: 'white',
              //     color: '#ffffff',
              // },
              // '&:hover':{
              //     borderColor: 'transparent',
              //     backgroundColor: 'white',
              // },
          },
          containedPrimary:{
              // '&:active':{
              //     backgroundColor: 'rgba(23, 67, 151, 1) !important',
              //     borderColor: 'white',
              //     color: '#ffffff',
              // },
              // '&:hover':{
              //     borderColor: 'transparent',
              //     backgroundColor: 'rgba(23, 67, 151, 1)',
              // },
          }
        },
        MuiInputBase:{
           root:{
               backgroundColor: "white",
               fontSize: '0.8rem',
               fontWeight: '400',
               '&.Mui-disabled':{
                   background: `#f5f5f5`,
                   color: '#333',
               },
           },
        },
        MuiButtonGroup:{
            groupedOutlinedPrimary:{
                '&:hover':{
                    borderColor: '#d6d6d6',
                }
            }
        },
        MuiOutlinedInput: {
            root:{
              minHeight: '34px',
              borderColor: '#d6d6d6',
                '&.Mui-focused .MuiOutlinedInput-notchedOutline':{
                    borderWidth: '1px',
                    borderColor: '#808080'
                }
            },
            input: {
                padding: '8px 12px',

            },
            adornedStart: {
                padding: '9px',
                '& .MuiOutlinedInput-input':{
                    padding: '0'
                }
            },
            multiline:{
                padding: '10px',
            }
        },
        MuiFormHelperText: {
          contained: {
              marginLeft: 0,
              marginRight: 0,
          }
        },
        MuiPaper:{
            elevation1:{
                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.16)'
            }
        },
        MuiLink:{
            root:{
                '&:hover':{
                    color: '#2C7A7B',
                }
            }
        }
    },



});


export default theme;