<template lang="">
    <div>
        <!-- 제목 -->
        <h1>Spring 통신</h1>
        <!-- 버튼생성, 클릭 이벤트를 줘서 누룰 수 있음
        랜덤 숫자는 버튼 이름 -->
        <v-btn @click="random">랜덤 숫자</v-btn>
        <h1>3+5 받아오기</h1>
        <v-btn @click="plus">더하기</v-btn>
        <h1>3+5 보내기</h1>
        <v-btn @click="send">보내기</v-btn>
        <h1>인사 받기</h1>
        <v-btn @click="hi">인사</v-btn>
        <h1>홍길동 이름 받아오기</h1>
        <v-btn @click="name">이름</v-btn>
        <h1>홍길동 나이 받아오기</h1>
        <v-btn @click="age">나이</v-btn>
    </div>
</template>

<script>
// axios import 해주기
import axios from 'axios';

export default {
    data () {
        return {
            // 아래에서 스프링으로 보내줄 값을 초기화 해준거
            // number1 number2 hello hgdName 를
            //   const {hgdName} = this -> 이렇게 사용한다.
            number1: 100,
            number2: 2000,
            hello: '안녕',
            hgdName: "홍길동",
        }
    },
    methods : {
        // random() {} -> v-btn @click="random" 에 있는 "random"
        // @click="random" 버튼을 누르면 팝업창이 뜨고
        // axios.get 요청을 하여 spring에서 데이터를 받아온다.
        random() {
            alert("눌렸습니다.") // 팝업창
            //   get은 받아오는거           spring 큰주소 / 작은주소
            axios.get('http://localhost:7777/traffic-test/random')
            // res는 result
            // res.data 스프링으로 받아온 값
            .then((res) => {
                alert("받아왔습니다. 숫자는 " + res.data)
            })
            .catch((res) => {
                alert("전송 실패")
            })
        },
        plus() {
            alert("더했습니다.")
            axios.get('http://localhost:7777/traffic-test/plus')
            .then((res) => {
                alert("더했습니다 더한 값은" + res.data)
            } )
            .catch((res) => {
                alert("전송 실패")
            })
        },
        send() {
            alert("눌렸습니다.")
            // post는 data를 보내고 res.data(스프링에서 보내는 값?)을 받아오는거..?
            // post로 보낼때는 불변객체를 만들어줘야해서 const {number1, number2} = this 사용
            // 위 return 초기화 해줌
            const {number1, number2} = this
            // {number1,number2} 스프링으로 보내줄 매개변수임 
            axios.post('http://localhost:7777/traffic-test/send', {number1,number2})
            .then((res) => {
                // 값을 위에서 아무때나 변경하려면 이렇게 사용하는것이 좋다.
                // 앞에 this. 을 붙여서 사용
                alert(this.number1 +" + "+this.number2 +" = " + res.data)
            })
            .catch((res) => {
                alert("전송 실패")
            })
        },
        hi() {
            alert("인사합니다.")
            const {hello} = this
            axios.post('http://localhost:7777/traffic-test/hi', {hello})
            .then((res) => {
                alert(this.hello + "을 보냅니다." + res.data + "를 받았습니다.") 
            })
            .catch((res) => {
                alert("전송 실패")
            }) 
        },
        name() {
            alert("이름 버튼을 눌렀습니다.")
            axios.get('http://localhost:7777/traffic-test/name')
            .then((res) => {
                alert("받아온 이름은 " + res.data)
            }) 
            .catch((res) => {
                alert("전송 실패")
            })
        },
        age() {
            alert("이름을 보냈습니다.")
            const {hgdName} = this
            axios.post('http://localhost:7777/traffic-test/age', {hgdName})
            .then((res) => {
                alert(this.hgdName + "의 나이는 " + res.data + "세 입니다.")
            })
            .catch((res) => {
                alert("전송 실패")
            }) 
        }
    }
}
</script>

<style lang="">
    
</style>