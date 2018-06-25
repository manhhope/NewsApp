import {Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window')

export default {
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    findContainer: {
        marginTop: 20,
        backgroundColor: '#e0e0e0',
    },
    contentContainer: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    renderItem: {
        backgroundColor: '#ffffff',
        borderBottomColor: '#cccccc',
        marginBottom: 20
    },
    rowitem: {
        paddingTop: 10,
        backgroundColor: '#ffffff',
    },
    gridView: {
        padding: 10
    },
    textTitle: {
        fontSize: 14,
        paddingLeft: 10,
    },
    textDetail: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'right',
        paddingRight: 10
    },
    rowHorizontal: {
        height: 2,
        marginTop: 3,
        backgroundColor: '#03a9f4'
    }
}