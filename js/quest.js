var nArray = ['Ch01. 모험의 시작', 'Ch02. 동행자', 'Ch03. 비밀의 문', 'Ch04. 한가로운 식사',
'Ch05. 수상한 인기척', 'Ch06. 꿈의 불청객','Ch07. 모험의 성과','Ch08. 모험을 마치며']
var qArray = [
'게임을 알아보기 위해 당신은 지금부터 모험을 떠나게 됩니다.<br> 당신은 어디로 떠날 예정인가요?',
'모험에 가기 전, 모르는 사람이 함께 가고 싶다고 말합니다.<br> 당신은 어떻게 할 건가요?',
'우연히 비밀의 문에 도착한 당신은 눈앞에<br>수많은 퍼즐들을 보게 됩니다. 당신은 어떻게 할 건가요?',
'배가 고파 밥을 먹기 위해 자리를 찾고 있는 당신,<br>어느 자리로 갈 건가요?',
'무엇인지는 모르겠지만 당신은 갑작스레<br>쫓기는 기분이 듭니다. 이때 당신은 어떻게 할 건가요?',
'힘든 일정으로 지쳐서 일찍 잠든 당신은 악몽을 꾸게 됩니다.<br>어떤 꿈을 꾸고 있나요?',
'모험은 마지막을 향해 달리고 있습니다.<br>이번 모험으로 당신이 가장 크게 얻은 것은 무엇인가요?',
'모험이 끝나고 집에 돌아온 당신은<br>가장 먼저 무엇을 할 건가요?'
]
var aArray = [ 
    {first : '동식물들과 어우러진 평화로운 자연', 
    score1 : 'S',
    second : '활동적인 액티비티가 기다리고 있는 곳', 
    score2 : 'N'},
    { first : '모르는 사람과의 동행은 불편하니 거절한다.', 
    score1 : 'N',
    second : '파트너가 있는 것도 나름 재미있을 것 같아 승낙한다.', 
    score2 : 'W'},
    { first : '기왕 온 모험에서 시간 낭비는 할 수 없으니 비밀의 문을 떠난다.', 
    score1 : 'H',
   second : '여기까지 왔으니 시간이 얼마나 걸리든 퍼즐을 푼다.', 
    score2 : 'W'},
    {  first : '작은 연못이 있는 넓은 잔디밭', 
    score1 : 'S',
    second : '계곡 위에 놓인 크고 평평한 바위', 
    score2 : 'F'},
    { first : '몸을 가릴 곳을 찾아 조용히 숨는다.', 
    score1 : 'N',
    second : '일단 부딪혀 보기 위해 인기척이 있는 곳으로 향한다.', 
    score2 : 'W'},
    { first : '누군가에게 쫓겨서 힘들게 달리고 있는 꿈', 
    score1 : 'N',
    second : '모르는 곳에 갇혀 불안에 떨고 있는 꿈', 
    score2 : 'F'},
    { first : '혼자 헤쳐나갈 수 있다는 용기를 얻은 것', 
    score1 : 'H',
    second : '다양한 사람들과 만나 새로운 문화를 접한 것', 
    score2 : 'S'},
    { first : '친한 지인들에게 모험에서 있었던 일들을 얘기한다.', 
    score1 : 'F',
    second : '일단 피곤하니 씻고 잠에 든다.', 
    score2 : 'H'}]

    let count = 0; //클릭횟수
    let person = []; //사용자의 점수 저장

    window.onload = function (){
        data(count);
    }

    function data(count) {
    $("#qNum").val();
    $("#q").val();
    $("#a1").val();
    $("#a2").val();

    qNum.innerHTML = nArray[count];
    q.innerHTML = qArray[count]; //질문
    a1.innerHTML = aArray[count].first; //답변
    a2.innerHTML = aArray[count].second;
}

//첫번째 답변 클릭
    function firstSave() {
        let ans1 = $("#a1").val();
        let ans2 = $("#a2").val(); 

        person.push(aArray[count].score1);
        count++;
        console.log(person);

        if(count==8) {
            //data(count);
            location.href = "Result.html?person="+JSON.stringify(person);
            //rScore(person);
        }
        else {
            data(count);
        }
    }

    //두번째 답변 클릭
    function secondSave() {
        let ans1 = $("#a1").val();
        let ans2 = $("#a2").val(); 

        person.push(aArray[count].score2);
        count++;
        console.log(person);

        if(count==8) {
            //data(count);
            location.href = "Result.html?person="+JSON.stringify(person);
            //rScore(person);
        }
        else {
            data(count);
        }
    }