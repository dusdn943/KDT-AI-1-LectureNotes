package com.example.demo.lectureClass.test.controller;

import com.example.demo.lectureClass.test.form.TrafficAgeTestForm;
import com.example.demo.lectureClass.test.form.TrafficHiTestForm;
import com.example.demo.lectureClass.test.form.TrafficSendTestForm;
import com.example.demo.lectureClass.utility.random.CustomRandom;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/traffic-test")
public class trafficTestController {

    @GetMapping("/random")
    public Integer randomTest(){
        log.info("randomTest()");
        // 우리가 utility에 만들어놓은 랜덤 숫자값을 가져온것
        // 10+1 을 해준것은 0부터 시작이라서 1부터 하려고
        // 내가 주려는 값은 1 ~ 10까지의 값이기 때문에
        return CustomRandom.generateNumber(10+1,1);
    }

    @GetMapping("/plus")
    public Integer plusTest(){
        log.info("plusTest()");
        return 3 + 5;
    }

    @PostMapping("/send")

    public Integer sendTest (@RequestBody TrafficSendTestForm trafficSendTestForm) {
        log.info("sendTest()");

        // 숫자 둘을 더한 값
        Integer Number = trafficSendTestForm.number1 + trafficSendTestForm.number2;

        return Number;
    }

    @PostMapping("/hi")
    public String hiTest (@RequestBody TrafficHiTestForm trafficHiTestForm) {
        log.info("hiTest()");

        return "잘가";
    }

    @GetMapping("/name")
    public String nameTest () {
        log.info("nameTest()");
        return "홍길동";
    }

    @PostMapping("/age")
    public Integer ageTest (@RequestBody TrafficAgeTestForm trafficAgeTestForm) {
        log.info("ageTest()");
        return CustomRandom.generateNumber(30,15);
    }
}
