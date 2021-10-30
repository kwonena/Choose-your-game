    const link_btn = document.querySelector("#game_link");
    
    var href = window.location.href;
    var url = new URL(href);
    var person = url.searchParams.get("person");

   var resultArray = [
    "어드벤처 액션 게임 Little Nightmares(리틀 나이트메어)를 추천합니다.",
    "1인 롤플레잉 인디 게임 Stardew Valley(스타듀밸리)를 추천합니다.",
    "생존형 크래프팅 게임 The Forest(더 포레스트)를 추천합니다.",
    "멀티플레이 퍼즐형 게임 We Were Here(위 워 히어)를 추천합니다.",
    "미스터리 공포 게임 Little Hope(리틀 호프)를 추천합니다."
    ]
    var text1 = " \"어린 시절 당신이 겪었던 공포와 다시금 마주할 수 있습니다.\" <br>노란 우비를 입은 주인공 six(식스)를 도와 악몽에서 탈출 시켜주세요.<br><br><br>당신은 호기심이 왕성하고 자유분방하며 원하는 것은<br>꼭 손에 넣어야 하는 주인공 six와 닮은 점이 많습니다. <br>타인이 보기에 조용하고 얌전해 보이지만 머릿속에선 항상 상상의 나래가 펼쳐지곤 합니다. <br>리틀 나이트메어는 당신의 상상력을 최대화 시켜줄 게임입니다! <br>목구멍이라는 특이한 이름의 잠수함 속에서 작은 six는 거대한 적들과 마주하게 됩니다. <br>당신은 넘치는 상상력과 호기심을 통해 거대한 적들의 특징에 맞게 컨트롤과 전략을 생각해야 합니다. <br>\'이상한 앨리스\'가 떠오를 만큼 독특하고 기괴한 그림체는 당신의 내면을 더욱더 자극하게 될 겁니다. <br>내면과는 다르게 겉으로는 표현을 잘 하지 않는 당신은 원하는 것이 생기면 물불 가리지 않고 달려듭니다. <br>탈출이라는 목적을 향해 달려가는 six를 도와 탈출구를 찾아보세요<br><br><br><br>겁에 질린 six의 목구멍 탈출을 도와주시겠어요?<br>";
    var text2 = "\"작은 시골 마을에서 당신은 평화로운 일상을 보낼 수 있습니다.\" <br>할아버지가 남긴 한적한 펠리컨 마을의 작은 집에서 농부가 되어 원하는 모든 것을 가꿔보세요. <br><br><br>당신은 차분하고 조용하며 겉으로 감정 표현을 잘 하지 않는 사람입니다. <br>표현은 하지 않지만 외부 자극에 예민하게 반응하며 스트레스를 푸는 것을 어려워합니다. <br>스타듀밸리의 주인공 또한 고단한 회사 생활로 인해 말 못 할 스트레스와 고민이 많습니다. <br>돌아가신 할아버지의 편지를 계기로 한적한 펠리컨 마을에<br>이사를 온 주인공과 함께 잔잔한 일상을 느껴보는 건 어떠신가요? <br>타인에게 쉽게 마음을 열고 사람을 좋아하는 당신에게 주변 사람들은 편안함을 느끼게 됩니다. <br>인간관계에 걱정이 많은 당신이지만 사람을 참 좋아하는 따뜻한 당신을 위해<br>스타듀밸리는 톡톡 튀는 개성을 가진 주민들과의 만남을 선사합니다. <br>잔잔하지만 중독성 있는 효과음과 평화로운 펠리컨 마을의 주민들과 함께<br>당신이 원하는 이야기를 만들어보세요! <br>다양한 사용자들의 많은 리텍들은 당신의 취향에 맞게 가꿔나갈 수 있습니다. <br><br><br><br>지루한 일상에서 벗어나 농부로서의 새로운 삶을 즐겨보시겠어요? <br>";
    var text3 = "\"식인종에게 납치된 아들을 찾기 위해 생존 전문가가 되어 보세요!\" <br>여객기 추락으로 알 수 없는 섬에서 아들을 잃어버린 주인공을 도와 아들을 찾아주세요. <br><br><br>당신은 차분하게 인생을 관찰하고 현실적으로 문제를 파악하는 사람입니다. <br>약간의 스트레스는 당신에게 동기부여를 심어주어 목표를 향한 활력소 역할을 하게 됩니다. <br>식인종이 나타나는 불편한 섬은 아들을 구하려는 당신의 목표를 더욱더 확고하게 만듭니다. <br>생존 전문가인 당신은 오감과 경험에 따라 필요한 생존 물품들을 만들어야 합니다. <br>아들을 구하려는 계획에 식인종이라는 변수가 생긴다면 어떨까요? <br>생존 중간에 당신을 위협하는 식인종과 돌연변이들로부터 자신을 보호하세요. <br>당신의 경험과 아들을 구하려는 확고한 목적은 당신의 생존력을 끌어올릴 겁니다.<br>더불어 이 섬의 비밀과 여객기 추락의 원인을 찾아보세요! <br>당신이 상상하지 못한 놀라운 비밀들이 당신을 맞이할 겁니다. <br><br><br><br>식인종들을 피해 아들을 구하러 가보시겠어요? <br>";
    var text4 = "\"친구와 함께 역할을 정해 퍼즐을 해결하고 이상한 건물에서 탈출하세요!\"<br>문제를 해설하는 사서와 문제를 풀어나가는 탐험가 중 하나를 골라 이상한 장소에서 탈출해보세요. <br><br><br>당신은 다른 사람이 무엇을 원하는지를 예민하게 생각하는 사람입니다. <br>상대방의 패턴을 읽고 어떤 행동을 할지 예측하여 그에 따라 반응하는 민첩한 사람입니다. <br>사람을 좋아하고 상대방과의 대화가 끊이지 않는 당신은 밝고 유쾌한 에너지를 뿜어냅니다. <br>게임을 함께 하는 파트너와 서로 다른 공간에 갇혀 서로를 볼 수 없는 상황에서<br>상대의 말과 행동을 예측해 퍼즐을 풀어야 합니다. <br>오직 음성만을 주고 받을 수 있는 상황에서 당신의 상상력은 얼마나 발휘될까요? <br>으스스한 음성과 파트너를 볼 수 없는 상황은 당신의 상상력을 더더욱 자극하게 될겁니다. <br>바닥에서 차오르는 물, 몸이 얼어붙을듯한 추위에 고통받는 탐험가는 사서에게 순발력을 요구합니다. <br>사서는 탐험가에게 정확하고 빠른 설명을, 탐험가는 사서의 말을 이해하는 능력이 필요합니다. <br>다양하고 복잡하게 얽힌 퍼즐들을 침착하게 풀어나가 보세요. <br><br><br><br>어두침침한 건물에서의 탈출을 친구와 함께 즐겨보시겠어요? <br>";
    var text5 = "\"으스스한 낯선 마을에서 당신의 선택으로 결말을 만들어 보세요!\" <br>리틀 호프라는 낯선 마을에서 과거와 현재를 연결하며 괴기스러운 과거의 사건을 풀어보세요. <br><br><br>자기주장이 강하고 리더십이 강한 당신은 리틀 호프로 하여금<br>자신의 이야기를 꾸려 결말을 유도할 수 있게 됩니다.<br>당신의 선택을 통해 인물들은 여러 결정을 내리게 되고<br>그에 따라 게임의 스토리도 변화합니다.<br>한 명이 아닌 여러 인물들의 행동과 성격을 조작하며 이상한 마을 리틀 호프에서 당신은 탈출해야 합니다. <br>항상 계획을 세우며 일을 진행시키는 당신의 앞에 예상치 못한<br>돌발 상황들이 계속해서 생기게 됩니다. <br>인기척은 없지만 으스스한 분위기를 자아내는<br>리틀 호프는 당신을 심리적으로 위축되게 할 겁니다. <br>당신의 상상력을 최대로 끌어올려 과거와 현재를 관통하는 사건의 악순환을 끊어내야 합니다. <br>공포를 극복하고 스토리에 몰입해보세요! <br>이전까지 느껴보지 못한 참신한 스토리는 당신의 귀와 눈을 장악하게 됩니다. <br><br><br><br>이상한 마을 리틀 호프에서 살아남아 보시겠어요? <br>";

    var linkArray = [
        "https://store.steampowered.com/app/424840/Little_Nightmares/",
        "https://store.steampowered.com/app/413150/Stardew_Valley/",
        "https://store.steampowered.com/app/242760/The_Forest/",
        "https://store.steampowered.com/app/582500/We_Were_Here/",
        "https://store.steampowered.com/app/1194630/The_Dark_Pictures_Anthology_Little_Hope/"
    ]

    var tmpN = 0;
    var tmpS = 0;
    var tmpF = 0;
    var tmpW = 0;
    var tmpH = 0;

    if(person.match(/N/g) != null) var tmpN = person.match(/N/g).length;
    if(person.match(/S/g) != null) var tmpS = person.match(/S/g).length;
    if(person.match(/F/g) != null) var tmpF = person.match(/F/g).length;
    if(person.match(/W/g) != null) var tmpW = person.match(/W/g).length;    
    if(person.match(/H/g) != null) var tmpH = person.match(/H/g).length;

    //리틀 나이트 메어
    if (tmpN >= 3) {
        $("#game_img").append('<img src="'+"../img/Night.png"+'"\>');
        game_text.innerHTML = text1;       
        game_result.innerHTML = resultArray[0];
        doMove(0);
    }
    //스타듀밸리
    else if (tmpS >= 3) {
        $("#game_img").append('<img src="'+"../img/Stardew.png"+'"\>');
        game_text.innerHTML = text2;       
        game_result.innerHTML = resultArray[1];
        doMove(1);
    }
    //더 포레스트
    else if (tmpF >= 3) {
        $("#game_img").append('<img src="'+"../img/Forest.png"+'"\>');
        game_text.innerHTML = text3;       
        game_result.innerHTML = resultArray[2];
        doMove(2);
    }
    //위워히어
    else if (tmpW >= 3) {
        $("#game_img").append('<img src="'+"../img/We.png"+'"\>');
        game_text.innerHTML = text4;       
        game_result.innerHTML = resultArray[3];
        doMove(3);
    }
    //리틀 호프
    else if (tmpH >= 3) {
        $("#game_img").append('<img src="'+"../img/Hope.png"+'"\>');
        game_text.innerHTML = text5;       
        game_result.innerHTML = resultArray[4];
        doMove(4);
    }
    else { //3개이상인 tmp가 없으면 무조건 리틀 나이트 메어
        $("#game_img").append('<img src="'+"../img/Night.png"+'"\>');
        game_text.innerHTML = text1;       
        game_result.innerHTML = resultArray[0];
        doMove(0);
    }

    function doMove(cnt) {
        link_btn.addEventListener("click", () => (location.href = linkArray[cnt]));
    }


    Kakao.init("174f13dcb1c46fa33e867f2a7d0389f2");
    // // 카카오링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
    Kakao.Link.createDefaultButton({
      container: '#share',
      objectType: 'feed',
      content: {
        title: "게임심리테스트",
        description: '당신에게 어울리는 게임을 추천해주는 게임 심리 테스트',
        imageUrl: "https://mblogthumb-phinf.pstatic.net/MjAxODA3MTFfNzQg/MDAxNTMxMjg4MzQ2MjYz.U2LbpBF52IGB5ETKR5S9s10dRyPq5P5VVHb3wbx-qHEg.uTBnh6nruLnVCNDq0XcET8wIMco1IHeRxFLDyxndrQog.JPEG.joypad/steam_logo_art_2000.0.jpg?type=w800",
        link: {
          webUrl: "http://localhost/index.html",
          mobileWebUrl: "http://localhost/index.html"
        }
      },
      social: {
        likeCount: 286,
        commentCount: 45,
        sharedCount: 845
      },
      buttons: [
        {
          title: 'G O',
          link: {
            mobileWebUrl: "http://localhost/index.html",
            webUrl: "http://localhost/index.html"
          }
        }  
      ]
    })
    