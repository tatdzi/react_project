
const initialState = {
    dialogsData: [
        {'name': 'Denis', 'id': '1'},
        {'name': 'Vlad', 'id': '2'},
        {'name': 'Larisa', 'id': '3'},
        {'name': 'Lera', 'id': '4'},
        {'name': 'Ilya', 'id': '5'},
        {'name': 'Nikita', 'id': '6'},
        {'name': 'Oleg', 'id': '7'}
    ],
    messagesData : [
        {'id':'1','message':'Hi, How are you?'},
        {'id':'2','message':'nice,all right'},
        {'id':'3','message':'What are you going to do tomorrow?'},
        {'id':'4','message':'Hi'},
        {'id':'5','message':'Hi, How are you?'}
    ]
}




const dialogReduser =(state=initialState,action) =>{
    return state;
}
export default dialogReduser