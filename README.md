# Grids & Circles - 커피 원두 주문 관리 시스템

Grids & Circles는 로컬 카페에서 고객들이 Coffee Bean 패키지를 온라인으로 주문할 수 있는 시스템입니다. 고객은 이메일을 통해 주문을 구분하며, 하루에 여러 번 주문하더라도 하나로 합쳐서 다음날 배송됩니다.

## 주요 기능

메뉴 생성: 관리자가 메뉴를 생성하여 ID를 자동으로 증가시켜 저장합니다.   
메뉴 수정: 특정 메뉴의 세부 정보를 수정할 수 있습니다.   
메뉴 삭제: 특정 메뉴를 삭제할 수 있습니다.   
주문 생성: 고객의 주문을 받아 ID를 자동으로 증가시켜 저장합니다.   
주문 조회: 모든 주문 내역을 조회할 수 있습니다.   
특정 주문 조회: 특정 주문의 세부 정보를 조회할 수 있습니다.   
주문 수정: 특정 주문의 세부 정보를 수정할 수 있습니다.   
주문 삭제: 특정 주문을 삭제할 수 있습니다.   
이 시스템은 Spring Boot와 JPA, Spring Security를 사용하여 구현하였으며, React를 통해 사용자 인터페이스를 제공합니다. 고객의 편리한 주문 경험을 위해 설계되었습니다.

# 협업 전략

2인 1조 짝 프로그래밍을 도입하여 개발하였습니다.

# 브랜치 전략
Main : 최종 결과물   
Develop : 작업물 통합   
Feature/이슈번호-담당자 : 담당 작업   
Feature -> Develpo -> Main   

## 커밋 유형
| 커밋 유형 | 설명 |
|-----------|------|
| FEAT | 새로운 기능 추가 |
| FIX | 버그 수정 |
| DESIGN | UI 디자인 변경 |
| !BREAKING CHANGE | 이전 버전과 호환되지 않는 변경사항 |
| !HOTFIX | 긴급하게 수정해야 하는 critical한 버그 수정 |
| STYLE | 코드 포맷팅, 세미콜론 누락 등 코드 변경이 없는 경우 |
| REFACTOR | 코드 리팩토링 |
| TEST | 테스트 코드 추가 또는 수정 |
| MERGE | 브랜치 병합 |
| CONFLICT | 충돌 해결 |
| DEPLOY | 배포 관련 변경사항 |
| REMOVE | 파일 삭제 |
| RENAME | 파일 이름 변경 |
| UPDATE | 의존성 또는 버전 업데이트 |
## PR ROLE
PR한 후 2명이 승인한 후 머지 가능

# 주요 화면

메뉴 리스트
![image](https://github.com/user-attachments/assets/7e5bed5d-b59b-402b-8f2c-ee56e72fb9eb)

주문
![image](https://github.com/user-attachments/assets/80a95ce9-eebe-4439-9cd5-8b515e49961b)

주문 조회
![image](https://github.com/user-attachments/assets/45c81c7a-1782-4269-be3f-6c0b38faa43d)

주문 수정
![image](https://github.com/user-attachments/assets/680c5e3c-c8b9-4c7a-8b11-d6bb91e7b02a)

메뉴 추가 및 수정
![image](https://github.com/user-attachments/assets/9ad4e040-b294-440d-9f6f-d6c0a585cafb)

# PPT
![Frame 3](https://github.com/user-attachments/assets/d796b1ac-843c-4133-a1bb-14f89889d62c)
![Frame 6](https://github.com/user-attachments/assets/4baba40e-7aee-4366-ba1e-f7aa988f7491)
![Group 21](https://github.com/user-attachments/assets/cd35bb07-0c19-41c8-be40-f25c9ef05132)
![Frame 4](https://github.com/user-attachments/assets/855cfbed-a3a5-467b-8cc2-d2c12caebd3a)
![Group 17](https://github.com/user-attachments/assets/cbb3b2ee-80d1-4876-bff9-8513c6c9fbb3)
![Group 13](https://github.com/user-attachments/assets/d63ef33d-276a-4973-8ca2-a8beae353029)
![Group 14](https://github.com/user-attachments/assets/00d361eb-70e2-4bcc-9d81-7650932af51c)
