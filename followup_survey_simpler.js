var q1 = 0;
var q2 = 0;
var q3 = 0;
var q4 = 0;
var q5 = 0;
var q6 = 0;
var q7 = 0;
var q8 = 0;

var w1 = 0;
var w2 = 0;
var w3 = 0;
var w4 = 0;
var w5 = 0;
var w6 = 0;
var w7 = 0;

var grit_score = 0;
var wemwbs_score = 0;

var previous_grit = window.formyoula.form_fields["Previous Grit Score"].get('value');
var previous_wemwbs = window.formyoula.form_fields["Previous WEMWBS Score"].get('value');
var previous_esteem = window.formyoula.form_fields["Previous Self Esteem Score"].get('value');
var change_grit = null;
var change_wemwbs = null;
var change_esteem = null;


var lookup_asc = {
'Very much like me':1,
'Mostly like me':2,
'Somewhat like me':3,
'Not much like me':4,
'Not at all like me':5,
};
var lookup_des = {
'Very much like me':5,
'Mostly like me':4,
'Somewhat like me':3,
'Not much like me':2,
'Not at all like me':1,
};
var lookup_esteem = {
  "Very true of me 😁":5,
  "Quite true of me":4,
  "Neither true nor untrue of me 😕":3,
  "Not that true of me":2,
  "Not true of me at all 😔":1,
};

var q1text = 'New ideas and projects sometimes distract me from previous ones.';
var q2text = "Setbacks (delays and obstacles) don’t discourage me. I bounce back from disappointments faster than most people.";
var q3text = 'I have been obsessed with a certain idea or project for a short time but later lost interest.';
var q4text = 'I am a hard worker.';
var q5text = 'I often set a goal but later choose to pursue (follow) a different one.';
var q6text = 'I have difficulty keeping my focus on projects that take more than a few months to complete.';
var q7text = 'I finish whatever I begin.';
var q8text = 'I am diligent (hard working and careful).';

var wem1text = 'I’ve been feeling optimistic about the future';
var wem2text = 'I’ve been feeling useful';
var wem3text = 'I’ve been feeling relaxed';
var wem4text = 'I’ve been dealing with my problems well';
var wem5text = 'I’ve been thinking clearly';
var wem6text = 'I’ve been feeling close to other people';
var wem7text = 'I’ve been able to make up my own mind about things';

function is_zero(score){return score==0;};

const addScores = scores => scores.reduce((a,b) => a + b, 0);

function generate_report(grit_score){
  var report = `Your Grit score is ${grit_score} out of 5.`
  if (grit_score == 5){
    report += '\nCongratulations you have the highest possible level of Grit.\
    \nThat means that you have the ability persevere and you stick with your goals\
 even when you face difficulties. You are the kind of person who is passionate\
 about what you do. A high level of grit is associated with being happier and\
 more sucessful, so keep it up.'
  }
  else if (grit_score >= 4) {
    report += '\nCongratulations you have a high level of Grit.\
    \nThat means that you have the ability persevere and you stick with your goals\
 even when you face difficulties. You are the kind of person who is passionate\
 about what you do. A high level of grit is associated with being happier and\
 more sucessful, grit is something you can improve with practice, so keep working on it.'

  }
  else if (grit_score >= 2.5) {
    report += '\nYou have a medium-high level of Grit.\
    \nRemember that grit is something you can improve by working on it.\
 Next time you are thinking of giving up on something, just remind yourself\
 that you are training your grittiness and keep trying. Other ways to improve\
 your grit include finding hobbies and interests that you care about and enjoy.'

  }
  else if (grit_score < 2.5) {
    report += '\nYour answers suggest that you find it difficult to stick with things\
 and see them through till the end. Perhaps you find it hard to put in effort or\
 get distracted easily. But don\'t worry remember that grit is something you\
 can improve by working on it. Usually people get more grit as they get older.\
 Next time you are thinking of giving up on something, just remind yourself\
 that you are training your grittiness and keep trying. Other ways to improve\
 your grit include finding hobbies and interests that you care about and enjoy.'

  }
  return report
};

function update_grit(){
  if (!([q1,q2,q3,q4,q5,q6,q7,q8].some(is_zero))){
    grit_score = addScores([q1,q2,q3,q4,q5,q6,q7,q8])/8;
    if (previous_grit){
      change_grit = grit_score - previous_grit;
      window.formyoula.form_fields['Change in grit'].set({value:change_grit});
    }
    var report = generate_report(grit_score);
    window.formyoula.form_fields['Grit Score'].set({value:grit_score});
    window.formyoula.form_fields['Grit score results'].set({value:report});;
  };
}

// Grit questions
window.formyoula.form_fields[q1text].on('all', function(){
  q1 = lookup_asc[window.formyoula.form_fields[q1text].get('value')];
  update_grit();
});

window.formyoula.form_fields[q2text].on('all', function(){
  q2 = lookup_des[window.formyoula.form_fields[q2text].get('value')];
  update_grit();
});

window.formyoula.form_fields[q3text].on('all', function(){
  q3 = lookup_asc[window.formyoula.form_fields[q3text].get('value')];
  update_grit();
});

window.formyoula.form_fields[q4text].on('all', function(){
  q4 = lookup_des[window.formyoula.form_fields[q4text].get('value')];
  update_grit();
});

window.formyoula.form_fields[q5text].on('all', function(){
  q5 = lookup_asc[window.formyoula.form_fields[q5text].get('value')];
  update_grit();
});

window.formyoula.form_fields[q6text].on('all', function(){
  q6 = lookup_asc[window.formyoula.form_fields[q6text].get('value')];
  update_grit();
});

window.formyoula.form_fields[q7text].on('all', function(){
  q7 = lookup_des[window.formyoula.form_fields[q7text].get('value')];
  update_grit();
});

window.formyoula.form_fields[q8text].on('all', function(){
  q8 = lookup_des[window.formyoula.form_fields[q8text].get('value')];
  update_grit();
});

// WEMWBS questions

var lookup_wemwebs = {
  'None of the time':1,
  'Rarely':2,
  'Some of the time':3,
  'Often':4,
  'All of the time':5,
};

var convert_wemwbs_scores = { // The 7 item wemwebs scale requires a special conversion to compare with 14 item scale. Source:https://warwick.ac.uk/fac/sci/med/research/platform/wemwbs/using/howto/swemwbs_raw_score_to_metric_score_conversion_table.pdf
  7: 7,8: 9.51,9: 11.25,10: 12.40,11: 13.33,12: 14.08,13: 14.75,14: 15.32,
  15: 15.84, 16: 16.36, 17: 16.88, 18: 17.43, 19: 17.98, 20: 18.59, 21: 19.25,
  22: 19.98, 23: 20.73, 24: 21.54, 25: 22.35, 26: 23.21, 27: 24.11, 28: 25.03,
  29: 26.02, 30: 27.03, 31: 28.13, 32: 29.31, 33: 30.70, 34: 32.55, 35: 35.00,
}

function make_wellbeing_report(wemwbs_score){
  var report = `Your wellbeing score is ${wemwbs_score} out of 35.\n`
  if (wemwbs_score >= 28.13){ //score is in the top 25%
    report += 'Your self-reported wellbeing score is higher than 75% of people.'
  }
  //score is above the median
  else if (wemwbs_score >= 26.02){
    report += 'Your self-reported wellbeing is higher than most people.'
  }
  //score is below the median but above the lower quartile
  else if (wemwbs_score >= 24.11){
    report += 'Your self-reported wellbeing is about average,\
 that\'s ok wellbeing is something that changes with time.'
  }
  //score is in the lower quartile
  else if (wemwbs_score < 24.11){
    report += 'Your self-reported wellbeing is lower than average,\
 that\'s ok wellbeing is something that changes with time. If you want to talk to\
 Art Against Knives staff about your wellbeing, mental health or any other reason just let one of us know.'
  }
  return report
}

function update_wemwbs(){
  if (!([w1,w2,w3,w4,w5,w6,w7].some(is_zero))){ // If all of the wemwebs questions have been answered compute score and make report
    wemwbs_score = convert_wemwbs_scores[addScores([w1,w2,w3,w4,w5,w6,w7])];
    if (previous_wemwbs){
      change_wemwbs = wemwbs_score - previous_wemwbs;
      window.formyoula.form_fields['Change in WEMWBS'].set({value:change_wemwbs});
    }
    var wellbeing_report = make_wellbeing_report(wemwbs_score);
    window.formyoula.form_fields['Wellbeing Score'].set({value:wemwbs_score});
    window.formyoula.form_fields['Wellbeing score results'].set({value:wellbeing_report});
  };
}

window.formyoula.form_fields[wem1text].on('all', function(){
  w1 = lookup_wemwebs[window.formyoula.form_fields[wem1text].get('value')];
  update_wemwbs();
});

window.formyoula.form_fields[wem2text].on('all', function(){
  w2 = lookup_wemwebs[window.formyoula.form_fields[wem2text].get('value')];
  update_wemwbs();
});

window.formyoula.form_fields[wem3text].on('all', function(){
  w3 = lookup_wemwebs[window.formyoula.form_fields[wem3text].get('value')];
  update_wemwbs();
});

window.formyoula.form_fields[wem4text].on('all', function(){
  w4 = lookup_wemwebs[window.formyoula.form_fields[wem4text].get('value')];
  update_wemwbs();
});

window.formyoula.form_fields[wem5text].on('all', function(){
  w5 = lookup_wemwebs[window.formyoula.form_fields[wem5text].get('value')];
  update_wemwbs();
});

window.formyoula.form_fields[wem6text].on('all', function(){
  w6 = lookup_wemwebs[window.formyoula.form_fields[wem6text].get('value')];
  update_wemwbs();
});

window.formyoula.form_fields[wem7text].on('all', function(){
  w7 = lookup_wemwebs[window.formyoula.form_fields[wem7text].get('value')];
  update_wemwbs();
});

window.formyoula.form_fields["I have high self-esteem."].on('all', function(){
  esteem_score = lookup_esteem[window.formyoula.form_fields["I have high self-esteem."].get('value')];
  if (previous_esteem){
    change_esteem = esteem_score - previous_esteem;
    window.formyoula.form_fields['Change in self-esteem'].set({value:change_esteem});
}
});


function generate_report(grit_score){
  var report = `Your Grit score is ${grit_score} out of 5.`
  if (grit_score == 5){
    report += '\nCongratulations you have the highest possible level of Grit.\
    \nThat means that you have the ability persevere and you stick with your goals\
 even when you face difficulties. You are the kind of person who is passionate\
 about what you do. A high level of grit is associated with being happier and\
 more sucessful, so keep it up.'
  }
  else if (grit_score >= 4) {
    report += '\nCongratulations you have a high level of Grit.\
    \nThat means that you have the ability persevere and you stick with your goals\
 even when you face difficulties. You are the kind of person who is passionate\
 about what you do. A high level of grit is associated with being happier and\
 more sucessful, grit is something you can improve with practice, so keep working on it.'

  }
  else if (grit_score >= 2.5) {
    report += '\nYou have a medium-high level of Grit.\
    \nRemember that grit is something you can improve by working on it.\
 Next time you are thinking of giving up on something, just remind yourself\
 that you are training your grittiness and keep trying. Other ways to improve\
 your grit include finding hobbies and interests that you care about and enjoy.'

  }
  else if (grit_score < 2.5) {
    report += '\nYour answers suggest that you find it difficult to stick with things\
 and see them through till the end. Perhaps you find it hard to put in effort or\
 get distracted easily. But don\'t worry remember that grit is something you\
 can improve by working on it. Usually people get more grit as they get older.\
 Next time you are thinking of giving up on something, just remind yourself\
 that you are training your grittiness and keep trying. Other ways to improve\
 your grit include finding hobbies and interests that you care about and enjoy.'

  }
  return report
};
