import { TextStyle } from "react-native";

const size = {
    xs : 10,
    s : 12,
    md : 16,
    lg : 20,
    xlg : 24,
    xxlg : 30,
    default : 14,
};

const weight: {[key : string] : TextStyle["fontWeight"]} = {
    bold : 'bold',
    normal : 'normal',
    thin : '400',
    semi : '600',
    full :'900',
};

export default {size,weight};