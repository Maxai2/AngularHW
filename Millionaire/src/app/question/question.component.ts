import { Question } from './../models/question';
import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'q';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.less']
})
export class QuestionComponent implements OnInit {

  questions: Question[];
  point: number;
  currentQuestionId: number;
  YesNo: boolean;
  name: string;
  ffEnabled: boolean;

  question: string;
  aAnswer: string;
  bAnswer: string;
  cAnswer: string;
  dAnswer: string;
  answerLetter: string;
  answerId: number;
  CorIncorAns: string;

  questionDiv: HTMLElement;
  SureDiv: HTMLElement;
  winDiv: HTMLElement;
  loseDiv: HTMLElement;

  showQuestion = true;

  constructor(private questionService: QuestionService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.questions = this.questionService.getQuestions();
    this.questionDiv = document.getElementById('questionDiv');
    this.SureDiv = document.getElementById('sureDiv');
    this.winDiv = document.getElementById('winDiv');
    this.loseDiv = document.getElementById('loseDiv');

    // this.SureDiv.style.display = 'none';
    this.winDiv.style.display = 'none';
    this.loseDiv.style.display = 'none';
    // this.questionDiv.style.display = 'none';

    this.route.params.forEach((params) => {
      this.name = params['name'];
    });

    this.currentQuestionId = 0;
    this.question = `${this.currentQuestionId + 1}) ${this.questions[0].title}`;
    this.point = 0;

    this.aAnswer = this.questions[0].answers[0];
    this.bAnswer = this.questions[0].answers[1];
    this.cAnswer = this.questions[0].answers[2];
    this.dAnswer = this.questions[0].answers[3];
  }

  answer(id: number) {
    this.answerId = id;
    this.showQuestion = false;
    // this.questionDiv.style.display = 'none';
    // this.SureDiv.style.display = 'flex';

    switch (id) {
      case 0:
        this.answerLetter = 'A';
        break;
      case 1:
        this.answerLetter = 'B';
        break;
      case 2:
        this.answerLetter = 'C';
        break;
      case 3:
        this.answerLetter = 'D';
        break;
    }
  }

  sure(index: number) {
    if (index === 1) {
      this.YesNo = true;
    } else {
      this.YesNo = false;
    }

    this.showQuestion = true;
    // this.questionDiv.style.display = 'flex';
    // this.SureDiv.style.display = 'none';

    this.afterSure();
  }

  afterSure() {
    if (this.YesNo) {
      const result = this.questionService.checkQuestion(this.currentQuestionId, this.answerId);

      this.correctIncorrectAnswer(this.answerId, result);
    }
  }

  async correctIncorrectAnswer(id: number, cor: boolean) {
    const elem = document.getElementById(id.toString());

    if (cor) {
      elem.style.backgroundColor = 'green';
      this.point += 500;
      this.currentQuestionId++;
      await delay(2000);

      if (this.currentQuestionId !== 13) {
        this.nextQuestion(id);
      } else {
        this.questionDiv.style.display = 'none';
        this.winDiv.style.display = 'flex';
      }

    } else {
      elem.style.backgroundColor = 'red';
      const incorElem = document.getElementById(this.questions[this.currentQuestionId].hintId.toString());

      incorElem.style.backgroundColor = 'green';

      for (let i = 0; i < 4; i++) {
        (<HTMLInputElement>document.getElementById(i.toString())).disabled = true;
      }

      await delay(5000);

      this.questionDiv.style.display = 'none';
      this.loseDiv.style.display = 'flex';
    }
  }

  nextQuestion(id: number) {

    if (this.ffEnabled) {
      for (let i = 0; i < 4; i++) {
        document.getElementById(i.toString()).style.display = 'flex';
      }

      this.ffEnabled = false;
    }

    document.getElementById(id.toString()).style.backgroundColor = '';
    document.getElementById(id.toString()).className = 'btClassRecover';

    this.question = `${this.currentQuestionId + 1}) ${this.questions[this.currentQuestionId].title}`;

    this.aAnswer = this.questions[this.currentQuestionId].answers[0];
    this.bAnswer = this.questions[this.currentQuestionId].answers[1];
    this.cAnswer = this.questions[this.currentQuestionId].answers[2];
    this.dAnswer = this.questions[this.currentQuestionId].answers[3];
  }

  restartGame() {
    this.router.navigate([
      'welcome'
    ]);
  }

  FiftyFifty() {
    const curId = this.questions[this.currentQuestionId].hintId;

    switch (curId) {
      case 0:
      case 3:
        document.getElementById('1').style.display = 'none';
        document.getElementById('2').style.display = 'none';
        break;
      case 1:
      case 2:
        document.getElementById('0').style.display = 'none';
        document.getElementById('3').style.display = 'none';
        break;
    }

    (<HTMLInputElement>document.getElementById('fifty')).disabled = true;
    this.ffEnabled = true;
  }

  async Call() {
    (<HTMLInputElement>document.getElementById('call')).disabled = true;
    document.getElementById('FriendHelp').style.display = 'block';
    const curId = this.questions[this.currentQuestionId].hintId;

    const ran = Math.floor(Math.random() * 10) + 1;

    if (ran % 2 === 0) {
      switch (curId) {
        case 0:
          this.CorIncorAns = 'A';
          break;
        case 1:
          this.CorIncorAns = 'B';
          break;
        case 2:
          this.CorIncorAns = 'C';
          break;
        case 3:
          this.CorIncorAns = 'D';
          break;
      }
    } else {
      this.CorIncorAns = '... Простите связь с космосом оборвалась)';
    }

    await delay(5000);

    document.getElementById('FriendHelp').style.display = 'none';
  }

  Auditory() {
    (<HTMLInputElement>document.getElementById('auditory')).disabled = true;
    const curId = this.questions[this.currentQuestionId].hintId;

  }

  //   const chart = new CanvasJS.Chart('chartContainer', {
  //     theme: 'light1', // "light2", "dark1", "dark2"
  //     animationEnabled: true, // change to true
  //     title: {
  //       text: ''
  //     },
  //     data: [
  //     {
  //       // Change type to "bar", "area", "spline", "pie",etc.
  //       type: 'column',
  //       dataPoints: [
  //         { label: 'A',  y: 10  },
  //         { label: 'B', y: 15  },
  //         { label: 'C', y: 25  },
  //         { label: 'D',  y: 30  }
  //       ]
  //     }
  //     ]
  //   });
  //   chart.render();
  // }

}
