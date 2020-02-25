// Using IDs of questions allows minor changes to the wording
// but adding new questions or deleting questions will break the lookups
var q1_ID = '4f1e-20a1-3688';
var q2_ID = '3eed-5251-d804';
var q3_ID = '3efe-7d34-a36c';
var q4_ID = '68a9-ea26-25c2';
var q5_ID = '6d4e-8b26-e17a';

var q1_score_ID = '52de-8399-31db';
var q2_score_ID = '6bbe-a512-1636';
var q3_score_ID = 'd0d4-d3a7-0f94';
var q4_score_ID = '227b-4c58-91cf';
var q5_score_ID = '85fb-2e2d-b4c1';

// scores are calculated based on the position of the questions
// The top answer must remain the highest scoring and bottom lowest scoring

var lookup_score = {
  [window.formyoula.form_fields[q1_ID].get('select_options').split('\n')[0]]: 3,
  [window.formyoula.form_fields[q2_ID].get('select_options').split('\n')[0]]: 3,
  [window.formyoula.form_fields[q3_ID].get('select_options').split('\n')[0]]: 3,
  [window.formyoula.form_fields[q4_ID].get('select_options').split('\n')[0]]: 3,
  [window.formyoula.form_fields[q5_ID].get('select_options').split('\n')[0]]: 3,

  [window.formyoula.form_fields[q1_ID].get('select_options').split('\n')[1]]: 2,
  [window.formyoula.form_fields[q2_ID].get('select_options').split('\n')[1]]: 2,
  [window.formyoula.form_fields[q3_ID].get('select_options').split('\n')[1]]: 2,
  [window.formyoula.form_fields[q4_ID].get('select_options').split('\n')[1]]: 2,
  [window.formyoula.form_fields[q5_ID].get('select_options').split('\n')[1]]: 2,

  [window.formyoula.form_fields[q1_ID].get('select_options').split('\n')[2]]: 1,
  [window.formyoula.form_fields[q2_ID].get('select_options').split('\n')[2]]: 1,
  [window.formyoula.form_fields[q3_ID].get('select_options').split('\n')[2]]: 1,
  [window.formyoula.form_fields[q4_ID].get('select_options').split('\n')[2]]: 1,
  [window.formyoula.form_fields[q5_ID].get('select_options').split('\n')[2]]: 1,

};

window.formyoula.form_fields[q1_ID].on('all', function(){
  var score = lookup_score[window.formyoula.form_fields[q1_ID].get('value')];
  window.formyoula.form_fields[q1_score_ID].set({value:score});
});

window.formyoula.form_fields[q2_ID].on('all', function(){
  var score = lookup_score[window.formyoula.form_fields[q2_ID].get('value')];
  window.formyoula.form_fields[q2_score_ID].set({value:score});
});

window.formyoula.form_fields[q3_ID].on('all', function(){
  var score = lookup_score[window.formyoula.form_fields[q3_ID].get('value')];
  window.formyoula.form_fields[q3_score_ID].set({value:score});
});

window.formyoula.form_fields[q4_ID].on('all', function(){
  var score = lookup_score[window.formyoula.form_fields[q4_ID].get('value')];
  window.formyoula.form_fields[q4_score_ID].set({value:score});
});

window.formyoula.form_fields[q5_ID].on('all', function(){
  var score = lookup_score[window.formyoula.form_fields[q5_ID].get('value')];
  window.formyoula.form_fields[q5_score_ID].set({value:score});
});
