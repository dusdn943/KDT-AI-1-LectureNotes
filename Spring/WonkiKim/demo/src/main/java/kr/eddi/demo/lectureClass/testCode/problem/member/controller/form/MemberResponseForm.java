package kr.eddi.demo.lectureClass.testCode.problem.member.controller.form;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.UUID;

@RequiredArgsConstructor
public class MemberResponseForm {
    @Getter
    final UUID usertoken;
}
