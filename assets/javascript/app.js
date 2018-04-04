var panel = $("#quiz-area");
// Question set
var questions = [{
  question: "The Home Depot employs more of what, than any other company?",
  answers: ["Veterans", "Olympic Atheletes", "Accountants", "Network Engineers"],
  correctAnswer: "Olympic Atheletes"
}, {
  question: "What year did The Home Depot go public on the Nasdaq Stock Echange?",
  answers: [ 1984,  1989, 1986, 1981],
  correctAnswer: "1981"
}, {
  question: "What year was The Homer Fund created?",
  answers: [1980, 1990, 1999, 2010],
  correctAnswer: "1999"
}, {
  question: "How many associates manage and maintain The Homer Fund operations?",
  answers: [250, 98, 8, 25],
  correctAnswer: "8"
}, {
  question: "Which of the following is NOT one of The Home Depot values?",
  answers: ["Respect for yourself", "Doing the right thing", "Excellent Customer Service", "Building strong relationships"],
  correctAnswer: "Respect for yourself"
}, {
  question: "When dis The Home Depot adopt Homer D. Poe as the company mascot",
  answers: [1978, 1981, 1985, 1990],
  correctAnswer: "1981"
}, {
  question: "In what year did The Home Depot stores start using UPC scanning systems?",
  answers: [1978, 1987, 1990, 1996],
  correctAnswer: "1987"
}, {
  question: "What market tested HomeDepot.com e-commerce features?",
  answers: ["Atlanta,Ga", "Washington, DC", "Los Angeles,Ca", "Las Vegas, Nv"],
  correctAnswer: "Las Vegas, Nv"
}, {
  question: "In what year did The Home Depot FIRST-Phone debut?",
  answers: [2000, 2012, 2010, 2015],
  correctAnswer: "2010"
}, {
 question: "This sports broadcast has been Built by The Home Depot?",
  answers: ["ESPN College Gameday", "ESPN Monday Night Football", "The 2018 Winter Olympics", "The 2016 Summer Olympics"],
  correctAnswer: "ESPN College Gameday"
}, {
 question: "Recently, The Home Depot started a podcast exploring our company culture, what was it titled?",
  answers: ["Homer's Thoughts on life", "Give me an H", "A Day in the Life", "Built from Scratch"],
  correctAnswer: "Give me an H"
}, {
  question: "Which of the followingis NOT a typical way to amke donations?",
  answers: ["Automatic Payroll Donation", "Check Donation", "Cash Donation", "Credit Card Donation"],
  correctAnswer:"Cash Donation"
}
}];
// Variable that will hold the setInterval
var timer;
var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,
}
  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);
    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");
    $("#start").remove();
    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }
    panel.append("<button id='done'>Done</button>");
  },
  done: function() {
    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-8']:checked"), function() {
      if ($(this).val() === questions[8].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-9']:checked"), function() {
      if ($(this).val() === questions[9].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-10']:checked"), function() {
      if ($(this).val() === questions[10].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    this.result();
  },
  result: function() {
    clearInterval(timer);
    $("#sub-wrapper h2").remove();
    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};
// CLICK EVENTS
$(document).on("click", "#start", function() {
  game.start();
});
$(document).on("click", "#done", function() {
  game.done();
});