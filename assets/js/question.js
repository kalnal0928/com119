const questions = [
    {
        number: "01",
        question: "다음 중 시스템 버스(system bus)의 구성 요소와 그 설명이 잘못 연결된 것은 무엇인가?",
        options: [
            "① 주소 버스(address bus): 기억 장치나 입출력 장치를 지정하는 주소 정보를 전송하는 단방향 신호 선들의 집합.",
            "② 데이터 버스(data bus): CPU와 기억 장치 및 입출력 장치 사이의 데이터를 양방향으로 전송하는 신호 선들의 집합.",
            "③ 제어 버스(control bus): CPU가 시스템 내의 각 요소의 동작을 제어하기 위해 필요한 신호를 전송하는 양방향 신호 선들의 집합.",
            "④ 시스템 버스(system bus): CPU, 기억 장치, 입출력 장치 사이의 정보를 교환하는 통로로, 주소 버스, 데이터 버스, 제어 버스로 구성된다."
        ],
        answer: "③ 제어 버스(control bus): CPU가 시스템 내의 각 요소의 동작을 제어하기 위해 필요한 신호를 전송하는 양방향 신호 선들의 집합.",
        chapter: "컴퓨터 구조",
        type: "multiple-choice"
    },
    {
        number: "02",
        question: "다음 중 Arm 프로세서가 아닌 것을 고르시오.",
        options: [
            "① Cortex-A76",
            "② Apple M2",
            "③ AMD Ryzen 9",
            "④ Snapdragon 8 Gen 2"
        ],
        answer: "③ AMD Ryzen 9",
        chapter: "컴퓨터 구조",
        type: "multiple-choice"
    },
    {
        number: "03",
        question: "다음 설명 중 Arm Holdings의 CPU 설계 및 사업 모델에 대한 설명으로 옳지 않은 것은?",
        options: [
            "① Arm은 RISC 아키텍처를 기반으로 한 CPU를 설계한다.",
            "② Arm은 CPU를 직접 생산하여 전 세계 시장에 판매하고 있다.",
            "③ Arm은 CPU IP를 수요 기업에 라이선스 형태로 제공한다.",
            "④ Qualcomm과 Samsung 등은 Arm 아키텍처를 기반으로 칩을 설계하고 제조한다."
        ],
        answer: "② Arm은 CPU를 직접 생산하여 전 세계 시장에 판매하고 있다.",
        chapter: "컴퓨터 구조",
        type: "multiple-choice"
    },
    {
        number: "04",
        question: "다음 중 nMOS 트랜지스터에 대한 설명으로 옳지 않은 것은?",
        options: [
            "① nMOS는 n형 물질을 사용하여 전류를 전달한다.",
            "② nMOS는 게이트에 전압을 가하면 채널이 열려 전류가 흐른다.",
            "③ nMOS는 p형 기판 위에 n형 소스와 드레인을 구성한다.",
            "④ nMOS는 보통 전류 소모가 크고 동작 속도가 느리다."
        ],
        answer: "④ nMOS는 보통 전류 소모가 크고 동작 속도가 느리다.",
        chapter: "컴퓨터 구조",
        type: "multiple-choice"
    },
    {
        number: "05",
        question: "컴퓨터에서 0과 1을 전기적으로 구분하여 표현하고, 논리 연산과 데이터 처리를 수행하는 데 사용되는 기본 소자의 이름은 무엇인가?",
        answer: "트랜지스터",
        chapter: "컴퓨터 구조",
        type: "essay"
    },
    {
        number: "06",
        question: "다음 중 CMOS NOT 게이트에 대한 설명으로 옳지 않은 것은?",
        options: [
            "① 입력이 0이면 출력은 1이 된다.",
            "② P형 트랜지스터(P1)는 입력이 0일 때 ON이 된다.",
            "③ N형 트랜지스터(N1)는 입력이 1일 때 OFF가 된다.",
            "④ 두 트랜지스터는 서로 보완적으로 동작하여 출력을 반전시킨다."
        ],
        answer: "③ N형 트랜지스터(N1)는 입력이 1일 때 OFF가 된다.",
        chapter: "컴퓨터 구조",
        type: "multiple-choice"
    },
    {
        number: "07",
        question: "무어의 법칙에 대하여 간략히 설명하시오.",
        answer: "반도체 칩에 집적되는 트랜지스터의 수가 24개월마다 두 배로 증가한다는 법칙",
        chapter: "컴퓨터 구조",
        type: "essay"
    },
    {
        number: "08",
        question: "16진수 값인 D1AF를 8진수로 변환하시오.",
        answer: "150457",
        chapter: "컴퓨터 구조",
        type: "essay"
    },
    {
        number: "09",
        question: "2진수 1010100111011010.1010111에 대한 8진수와 16진수 표현을 구하시오.",
        answer: "124732.534 / 193B4.AC",
        chapter: "컴퓨터 구조",
        type: "essay"
    },
    {
        number: "10",
        question: "다음 SI 단위를 그에 해당하는 10진수 값과 연결하시오.\nSI 단위 10진수 값\nA. kilo(K) ① 10¹²\nB. giga(G) ② 10³\nC. tera(T) ③ 10⁹",
        answer: "A-②, B-③, C-①",
        chapter: "컴퓨터 구조",
        type: "essay"
    },
    {
        number: "11",
        question: "IEC 단위인 GiB는 2의 거듭제곱 값으로 어떻게 표현되는가?",
        answer: "2³⁰",
        chapter: "컴퓨터 구조",
        type: "essay"
    },
    {
        number: "12",
        question: "2GiB 메모리 공간에 있는 모든 주소에 접근하려면 몇 개의 주소선(전선)이 필요한가?",
        answer: "31",
        chapter: "컴퓨터 구조",
        type: "essay"
    },
    {
        number: "13",
        question: "고급 언어로 작성된 코드를 컴퓨터가 이해할 수 있는 저급 언어로 번역해 주는 도구는 무엇인가?",
        answer: "컴파일러",
        chapter: "컴퓨터 구조",
        type: "essay"
    },
    {
        number: "14",
        question: "고급 언어를 한 줄씩 해석하여 실행하는 도구는 무엇인가?",
        answer: "인터프리터",
        chapter: "컴퓨터 구조",
        type: "essay"
    },
    {
        number: "15",
        question: "다음 중 고급 언어(high-level language)에 해당하지 않는 것은?",
        options: [
            "① Python",
            "② Java",
            "③ 어셈블리어",
            "④ C++"
        ],
        answer: "③ 어셈블리어",
        chapter: "컴퓨터 구조",
        type: "multiple-choice"
    },
    {
        number: "16",
        question: "저급 언어에 대한 설명으로 옳은 것은?",
        options: [
            "① 사람이 읽고 이해하기 쉽도록 만들어진 언어이다.",
            "② C, Python 등의 언어가 여기에 속한다.",
            "③ 컴퓨터가 직접 해석하고 실행 가능한 명령어로 구성된 언어이다.",
            "④ 영어와 유사한 문법을 갖고 있다."
        ],
        answer: "③ 컴퓨터가 직접 해석하고 실행 가능한 명령어로 구성된 언어이다.",
        chapter: "컴퓨터 구조",
        type: "multiple-choice"
    },
    {
        number: "17",
        question: "다음 중 인터프리터 언어의 특징으로 옳지 않은 것은?",
        options: [
            "① 한 줄씩 저급 언어로 번역하여 실행된다.",
            "② 코드 전체를 먼저 컴파일한 후 실행된다.",
            "③ 실행 중 오류가 발생하기 전까지 앞부분은 정상 수행된다.",
            "④ 대표적인 언어로 Python이 있다."
        ],
        answer: "② 코드 전체를 먼저 컴파일한 후 실행된다.",
        chapter: "컴퓨터 구조",
        type: "multiple-choice"
    },
    {
        number: "18",
        question: "컴파일러가 실행되는 플랫폼이 아닌 다른 플랫폼에서 실행 가능한 코드를 생성할 수 있도록 설계된 컴파일러를 무엇이라고 하는가?",
        answer: "크로스 컴파일러",
        chapter: "컴퓨터 구조",
        type: "essay"
    },
    {
        number: "19",
        question: "CISC(complex instruction set computer)와 RISC(reduced instruction set computer)에 대한 각각의 정의와 장/단점을 비교 서술하시오.",
        answer: "CISC는 복잡한 명령어 집합을 사용하여 적은 수의 명령어로 프로그램을 구현할 수 있지만, 명령어 길이가 가변적이고 디코딩이 복잡하다. 반면 RISC는 단순하고 고정된 길이의 명령어를 사용하여 파이프라이닝에 유리하고 전력 소모가 적지만, 더 많은 명령어가 필요하다.",
        chapter: "컴퓨터 구조",
        type: "essay"
    },
    {
        number: "21",
        question: "다음 중 멀티코어 시스템에 대한 설명으로 옳은 것은?",
        options: [
            "① 여러 개의 CPU를 시스템에 설치하여 사용하는 방식이다.",
            "② 하나의 코어에서 하나의 명령어만 처리하는 방식이다.",
            "③ 하나의 CPU 칩 안에 여러 개의 코어를 포함하여 동시에 여러 작업을 수행할 수 있다.",
            "④ 각 코어는 각각 별도의 메인메모리를 가지고 동작한다."
        ],
        answer: "③ 하나의 CPU 칩 안에 여러 개의 코어를 포함하여 동시에 여러 작업을 수행할 수 있다.",
        chapter: "컴퓨터 구조",
        type: "multiple-choice"
    },
    {
        number: "22",
        question: "다음 중 Single-cycle CPU에 대한 설명으로 옳은 것은?",
        options: [
            "① 하나의 명령어를 여러 사이클에 나눠서 처리한다.",
            "② 모든 명령어가 하나의 clock cycle 내에 처리된다.",
            "③ 명령어 병렬 처리를 통해 처리량을 높인다.",
            "④ 여러 개의 파이프라인을 사용하여 동시 처리한다."
        ],
        answer: "② 모든 명령어가 하나의 clock cycle 내에 처리된다.",
        chapter: "컴퓨터 구조",
        type: "multiple-choice"
    },
    {
        number: "24",
        question: "Superscalar CPU에 대하여 간략히 설명하시오.",
        answer: "하나의 클럭 사이클에 여러 개의 명령어를 동시에 처리할 수 있는 CPU 설계 방식",
        chapter: "컴퓨터 구조",
        type: "essay"
    },
    {
        number: "26",
        question: "4비트 부호/크기(Sign/Magnitude) 표현에서 1010은 10진수로 얼마를 의미하는가?",
        answer: "-2",
        chapter: "컴퓨터 구조",
        type: "essay"
    },
    {
        number: "27",
        question: "12비트의 2의 보수(2’s Complement) 표현 방식에서 표현 가능한 정수의 범위를 설명하시오.",
        answer: "-2048 ~ 2047",
        chapter: "컴퓨터 구조",
        type: "essay"
    },
    {
        number: "28",
        question: "부호/크기(Sign/Magnitude) 방식에서 발생하는 주요 문제점은 무엇인가?",
        answer: "0을 표현하는 방법이 두 가지(+0, -0) 존재한다.",
        chapter: "컴퓨터 구조",
        type: "essay"
    },
    {
        number: "29",
        question: "다음 12비트 2의 보수 표현 수 1111 1110 0100에 대해,\n① sign-extension을 적용했을 때의 32비트 결과를 16진수로 나타내시오.\n② zero-extension을 적용했을 때의 32비트 결과를 16진수로 나타내시오.",
        answer: "FFFFFE4 / 00000E4",
        chapter: "컴퓨터 구조",
        type: "essay"
    },
    {
        number: "30",
        question: "다음 명령어 수행 후 레지스터 x9의 결과값을 16진수로 쓰시오.\nand x9, x10, x11\nx10 = 0xFFFF_1234\nx11 = 0x0000_FF00",
        answer: "0x0000_1200",
        chapter: "컴퓨터 구조",
        type: "essay"
    },
    {
        number: "31",
        question: "다음 XOR 명령어 수행 결과, x9에 저장되는 값을 16진수로 나타내시오.\nxor x9, x10, x12\nx10 = 00000000 00000000 00001101 11000000\nx12 = 11111111 11111111 11111111 11111111",
        answer: "x10 = 00000000 00000000 00001101 11000000 = 0x00000DC0\nx12 = 11111111 11111111 11111111 11111111 = 0xFFFFFFFF\nx9 = x10 XOR x12 = 0xFFFFF23F",
        chapter: "컴퓨터 구조",
        type: "essay"
    },
    {
        number: "32",
        question: "XOR 논리 명령어의 유용성에 대해 설명하시오.",
        answer: "특정 비트를 반전시키는 데 유용하다.",
        chapter: "컴퓨터 구조",
        type: "essay"
    },
    {
        question: "XOR 연산을 이용하여 레지스터를 0으로 초기화하려면 어떤 조건이 필요한가?",
        answer: "자기 자신과 XOR 연산을 수행한다.",
        explanation: "어떤 값이든 자기 자신과 XOR 연산을 하면 모든 비트가 0이 됩니다. 이는 `mov r, 0`과 같은 명령어보다 더 효율적인 경우가 많아 어셈블리 프로그래밍에서 자주 사용되는 기법입니다."
    },
    {
        question: "아래 그림에서 빨간색 박스로 표기된 3번 명령어에 대하여 CPU와 메모리와 연관하여 실행 동작을 설명하시오. 이때, 메모리에 표기된 1번과 2번 명령어도 함께 포함하여 서술하시오.",
        answer: "주 20 정답: 초기 상태
CPU 레지스터: x4=13, x5=27, x6=40
메모리: 주소 20과 24에 각각 값이 저장되어 있음
명령어 실행 과정
1번 명령어: lw x4, 20(x0)
동작: 메모리 주소 20번지에서 데이터를 읽어와 x4 레지스터에 저장
CPU-메모리 상호작용:
CPU가 메모리 주소 20에 읽기 요청
메모리가 주소 20에 저장된 값(13)을 CPU로 전송
CPU가 이 값을 x4 레지스터에 저장
결과: x4 = 13 (메모리[20]에서 로드)
2번 명령어: lw x5, 24(x0)
동작: 메모리 주소 24번지에서 데이터를 읽어와 x5 레지스터에 저장
CPU-메모리 상호작용:
CPU가 메모리 주소 24에 읽기 요청
메모리가 주소 24에 저장된 값(27)을 CPU로 전송
CPU가 이 값을 x5 레지스터에 저장
결과: x5 = 27 (메모리[24]에서 로드)
3번 명령어: add x6, x4, x5 (주요 분석 대상)
CPU 내부 동작:
명령어 해독 단계:
명령어를 R-type ADD로 인식
rs1 = x4, rs2 = x5, rd = x6으로 파악
레지스터 파일 읽기:
x4 레지스터에서 값 13 읽기 (1번 명령어로 로드된 값)
x5 레지스터에서 값 27 읽기 (2번 명령어로 로드된 값)
ALU 연산 수행:
ALU에서 덧셈 연산 실행: 13 + 27 = 40
연산 결과 40 생성
결과 저장:
연산 결과 40을 목적지 레지스터 x6에 쓰기
레지스터 파일의 x6 값이 40으로 업데이트
메모리와의 상호작용:
메모리 접근 없음: 이 명령어는 순수한 레지스터 간 연산
모든 데이터는 이미 CPU 내부 레지스터에 존재
메모리 상태는 변경되지 않음
데이터 경로:
레지스터 파일(x4=13, x5=27) → ALU → 레지스터 파일(x6=40)
최종 상태
CPU 레지스터: x4=13, x5=27, x6=40
메모리: 변화 없음 (주소 20=13, 주소 24=27 유지)
핵심 특징
3번 명령어는 CPU 내부에서만 실행되어 매우 빠름
1, 2번 명령어가 메모리에서 데이터를 준비해둔 덕분에 가능
Load-Use 패턴의 전형적인 예시: 메모리에서 데이터를 로드한 후 연산에 활용",
        explanation: "1번과 2번 명령어(lw)는 메모리에서 데이터를 레지스터로 가져오는 'Load' 동작을 수행합니다. 3번 명령어(add)는 레지스터에 있는 데이터들을 사용하여 연산을 수행하는 'ALU' 동작입니다. 이처럼 메모리 접근은 상대적으로 느리기 때문에, 필요한 데이터를 미리 레지스터로 가져와(Load) CPU 내부에서 빠르게 연산(Use)하는 것은 RISC 프로세서의 핵심적인 성능 최적화 원리입니다."
    },
    {
        question: "레지스터 이름에 대한 번호가 다음과 같을 경우, RISC-V 명령어를 기계어(16진수)로 인코딩하시오. 이때, R-type 명령어 형식으로, opcode = 0110011, funct3 = 000, funct7 = 0000000임",
        answer: "먼저 레지스터 번호를 확인합니다:
t0 (목적지 레지스터 rd) = x5 = 5 (이진수: 00101)
s1 (소스 레지스터 rs1) = x9 = 9 (이진수: 01001)
s2 (소스 레지스터 rs2) = x18 = 18 (이진수: 10010)
R-type 명령어 형식 (32비트):
funct7 (7비트) | rs2 (5비트) | rs1 (5비트) | funct3 (3비트) | rd (5비트) | opcode (7비트)
각 필드를 채우면:
funct7  : 0000000 (7비트)
rs2     : 10010   (5비트) - s2 = x18
rs1     : 01001   (5비트) - s1 = x9
funct3  : 000     (3비트)
rd      : 00101   (5비트) - t0 = x5
opcode  : 0110011 (7비트)
32비트 이진수로 연결:
0000000 10010 01001 000 00101 0110011
이를 4비트씩 그룹화하여 16진수로 변환:
0000 0001 0010 0100 1000 0010 1011 0011
  0    1    2    4    8    2    B    3
따라서 기계어 코드는: 0x012482B3",
        explanation: "R-type 명령어는 레지스터 간의 연산을 위해 사용됩니다. 명령어의 각 필드(opcode, rd, funct3, rs1, rs2, funct7)에 해당하는 이진수 값을 찾아 조합한 후, 이를 16진수로 변환하여 최종 기계어 코드를 얻을 수 있습니다."
    }
];
    {
        number: "20",
        question: "아래 그림에서 빨간색 박스로 표기된 3번 명령어에 대하여 CPU와 메모리와 연관하여 실행 동작을 설명하시오. 이때, 메모리에 표기된 1번과 2번 명령어도 함께 포함하여 서술하시오.",
        answer: "주 20 정답: 초기 상태",
        chapter: "컴퓨터 구조",
        type: "essay"
    },
    {
        number: "25",
        question: "레지스터 이름에 대한 번호가 다음과 같을 경우, RISC-V 명령어를 기계어(16진수)로 인코딩하시오. 이때, R-type 명령어 형식으로, opcode = 0110011, funct3 = 000, funct7 = 0000000임",
        answer: "0x012482B3",
        chapter: "컴퓨터 구조",
        type: "essay"
    }
];
export default questions;
