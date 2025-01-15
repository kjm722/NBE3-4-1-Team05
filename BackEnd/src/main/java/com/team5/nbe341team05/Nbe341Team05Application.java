package com.team5.nbe341team05;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling  // 스케줄링 활성화
public class Nbe341Team05Application {

    public static void main(String[] args) {
        SpringApplication.run(Nbe341Team05Application.class, args);
    }
}
