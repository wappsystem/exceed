(function(){
    //-------------------------------------------------------------------------------------
    var p=""; //put a unique prefix to avoid conflict with others 
    var H=$vm.hosting_path+"/modules";
    var I=$vm.hosting_path;
    var m=$vm.module_list;
    var api="wapp";
    //-------------------------------------------------------------------------------------
    m[p+"not_elig1"]         ={url:H+"/form-grid/screening/not_elig1.html"},
    m[p+"not_eligphq9"]         ={url:H+"/form-grid/screening/not_eligphq9.html"},
    m[p+"not_eligios"]         ={url:H+"/form-grid/screening/not_eligios.html"},
    m[p+"not_eligiosb"]         ={url:H+"/form-grid/screening/not_eligiosb.html"},
    m[p+"not_elig2"]         ={url:H+"/form-grid/screening/not_elig2.html"},
    m[p+"not_elig3"]         ={url:H+"/form-grid/screening/not_elig3.html"},
    

    m[p+"participant-data"] ={url:H+"/form-grid/participant/participant-data.html",Table:"exceed-participant"
                            ,form_module:"participant-form",
                            child_panel:"panel-child",
                            online_questionnaire_bl:"oq-bl",
                            online_questionnaire_w0:"oq-w0",
                            online_questionnaire_w3:"oq-w3",
                            online_questionnaire_w8:"oq-w8",
                            online_questionnaire_w16:"oq-w16",
    };                   
    m[p+"participant-form"] ={url:H+"/form-grid/participant/participant-form.html",Table:"exceed-participant"},
    m[p+"notes-data"]       ={url:H+"/form-grid/questionnaires/notes-data.html",Table:"exceed-notes",form_module:"notes-form",router:1},
    m[p+"notes-form"]       ={url:H+"/form-grid/questionnaires/notes-form.html",Table:"exceed-notes"},
    m[p+"oq-bl"] ={url:I+"/bl_quest.html",task_name:"Baseline Questionnaires"},
    m[p+"oq-w0"] ={url:I+"/w0_quest_utd.html",task_name:"Week 0 Questionnaires"},
    m[p+"oq-w3"] ={url:I+"/w3_quest_qxe.html",task_name:"Week 3 Questionnaires"},
    m[p+"oq-w8"] ={url:I+"/w8_quest_pkn.html",task_name:"Week 8 Questionnaires"},
    m[p+"oq-w16"] ={url:I+"/w16_quest_ihs.html",task_name:"Week 16 Questionnaires"},
    m[p+"oq"] ={url:I+"/participant.html"},
    m[p+"shm1-w0"] ={url:I+"/nfuo.html"},
    m[p+"shm2-w3"] ={url:I+"/ktpa.html"},
    m[p+"shm3-w5"] ={url:I+"/jvqs.html"},
    m[p+"ac"] ={url:I+"/DONT_KNOW_THIS_URL.html"},


    m[p+"backend-panel"]    ={url:H+"/panels/backend-main.html", };
    m[p+"screening-data"]   ={url:H+"/form-grid/screening/eligibility-data.html",Table:"exceed-screening",router:1 };
    m[p+"panel-child"]  ={url:H+"/panels/child.html"}
    m[p+"bl-panel"]     ={url:H+"/panels/bl_quest.html",task_name:"Baseline Questionnaires"};
    m[p+"w0-panel"]     ={url:H+"/panels/w0_quest.html",task_name:"Week 0 Questionnaires"};
    m[p+"w3-panel"]     ={url:H+"/panels/w3_quest.html",task_name:"Week 3 Questionnaires"};
    m[p+"w8-panel"]     ={url:H+"/panels/w8_quest.html",task_name:"Week 8 Questionnaires"};
    m[p+"w16-panel"]     ={url:H+"/panels/w16_quest.html",task_name:"Week 16 Questionnaires"};

    m[p+"adverse-event-data"] ={url:H+"/form-grid/unscheduled/adverse-event-data.html",Table:"exceed-adverse-event",form_module:"adverse-event-form", task_name:"Adverse event" };
    m[p+"adverse-event-form"] ={url:H+"/form-grid/unscheduled/adverse-event-form.html",Table:"exceed-adverse-event", task_name:"Adverse event" };
    m[p+"serious-adverse-event-data"] ={url:H+"/form-grid/unscheduled/serious-adverse-event-data.html",Table:"exceed-serious-adverse-event",form_module:"serious-adverse-event-form", task_name:"Serious Adverse event" };
    m[p+"serious-adverse-event-form"] ={url:H+"/form-grid/unscheduled/serious-adverse-event-form.html",Table:"exceed-serious-adverse-event", task_name:"Serious Adverse event" };
    m[p+"serious-adverse-event-follow-up-data"] ={url:H+"/form-grid/unscheduled/serious-adverse-event-follow-up-data.html",Table:"exceed-serious-adverse-event-follow-up",form_module:"serious-adverse-event-follow-up-form", task_name:"Serious Adverse event follow-up" };
    m[p+"serious-adverse-event-follow-up-form"] ={url:H+"/form-grid/unscheduled/serious-adverse-event-follow-up-form.html",Table:"exceed-serious-adverse-event-follow-up", task_name:"Serious Adverse event follow-up" };
    m[p+"access-code-data"] ={url:H+"/form-grid/backend/access-code-data.html",Table:"exceed-access-code",form_module:"access-code-form", task_name:"Access Code" };
    m[p+"access-code-form"] ={url:H+"/form-grid/backend/access-code-form.html",Table:"exceed-access-code", task_name:"Access Code" };

    
    m[p+"demographic-data"] ={url:H+"/form-grid/questionnaires/demographic-data.html",Table:"exceed-demographic",form_module:"demographic-form", task_name:"Baseline Demographics" };
    m[p+"demographic-form"] ={url:H+"/form-grid/questionnaires/demographic-form.html",Table:"exceed-demographic", task_name:"Demographics" };

    m[p+"address-data"] ={url:H+"/form-grid/questionnaires/address-data.html",Table:"exceed-address",form_module:"address-form", task_name:"Address for sending Fitbit" };
    m[p+"address-form"] ={url:H+"/form-grid/questionnaires/address-form.html",Table:"exceed-address", task_name:"Address for sending Fitbit" };

    
    m[p+"sdmt-bl-data"]      ={url:H+"/form-grid/questionnaires/neurocog/sdmt-data.html",Table:"exceed-sdmt-bl",form_module:"sdmt-bl-form", task_name:"Symbol Digit Modality Test"};
    m[p+"sdmt-bl-form"]      ={url:H+"/form-grid/questionnaires/neurocog/sdmt-form.html",Table:"exceed-sdmt-bl", task_name:"Symbol Digit Modality Test" };
    m[p+"stroop-colour-bl-data"]      ={url:H+"/form-grid/questionnaires/neurocog/stroop-colour-data.html",Table:"exceed-stroop-colour-bl",form_module:"stroop-colour-bl-form", task_name:"Stroop Colour" };
    m[p+"stroop-colour-bl-form"]      ={url:H+"/form-grid/questionnaires/neurocog/stroop-colour-form.html",Table:"exceed-stroop-colour-bl", task_name:"Stroop Colour" };
    m[p+"stroop-text-bl-data"]      ={url:H+"/form-grid/questionnaires/neurocog/stroop-text-data.html",Table:"exceed-stroop-text-bl",form_module:"stroop-text-bl-form", task_name:"Stroop Text" };
    m[p+"stroop-text-bl-form"]      ={url:H+"/form-grid/questionnaires/neurocog/stroop-text-form.html",Table:"exceed-stroop-text-bl", task_name:"Stroop Text" };
    m[p+"lct-bl-data"]      ={url:H+"/form-grid/questionnaires/neurocog/letter-cancellation-data.html",Table:"exceed-lct-bl",form_module:"lct-bl-form", task_name:"Letter Cancellation Task" };
    m[p+"lct-bl-form"]      ={url:H+"/form-grid/questionnaires/neurocog/letter-cancellation-form.html",Table:"exceed-lct-bl", task_name:"Letter Cancellation Task" };
    m[p+"nback2-bl-data"]      ={url:H+"/form-grid/questionnaires/neurocog/nback2-data.html",Table:"exceed-nback2-bl",form_module:"nback2-bl-form", task_name:"N-Back 2" };
    m[p+"nback2-bl-form"]      ={url:H+"/form-grid/questionnaires/neurocog/nback2-form.html",Table:"exceed-nback2-bl", task_name:"N-Back 2" };
    m[p+"isi-bl-data"]      ={url:H+"/form-grid/questionnaires/isi-bl-data.html",Table:"exceed-screening", form_module:"isi-bl-form",task_name:"Insomnia Severity Index" };
    m[p+"isi-bl-form"]      ={url:H+"/form-grid/questionnaires/isi-form.html",Table:"exceed-psqi-bl", task_name:"Insomnia Severity Index" };
    m[p+"psqi-bl-data"]      ={url:H+"/form-grid/questionnaires/psqi-data.html",Table:"exceed-psqi-bl",form_module:"psqi-bl-form", task_name:"Pittsburgh Sleep Quality Index" };
    m[p+"psqi-bl-form"]      ={url:H+"/form-grid/questionnaires/psqi-form.html",Table:"exceed-psqi-bl", task_name:"Pittsburgh Sleep Quality Index" };
    m[p+"ess-bl-data"]      ={url:H+"/form-grid/questionnaires/ess-data.html",Table:"exceed-ess-bl",form_module:"ess-bl-form", task_name:"Epworth Sleepiness Scale" };
    m[p+"ess-bl-form"]      ={url:H+"/form-grid/questionnaires/ess-form.html",Table:"exceed-ess-bl", task_name:"Epworth Sleepiness Scale" };
    m[p+"gas-bl-data"]      ={url:H+"/form-grid/questionnaires/gas-data.html",Table:"exceed-gas-bl",form_module:"gas-bl-form", task_name:"Geriatric Anxiety Scale" };
    m[p+"gas-bl-form"]      ={url:H+"/form-grid/questionnaires/gas-form.html",Table:"exceed-gas-bl", task_name:"Geriatric Anxiety Scale" };
    m[p+"gad7-bl-data"]      ={url:H+"/form-grid/questionnaires/gad7-data.html",Table:"exceed-gad7-bl",form_module:"gad7-bl-form", task_name:"Generalized Anxiety Disorder" };
    m[p+"gad7-bl-form"]      ={url:H+"/form-grid/questionnaires/gad7-form.html",Table:"exceed-gad7-bl", task_name:"Generalized Anxiety Disorder" };
    m[p+"eheals-bl-data"]      ={url:H+"/form-grid/questionnaires/eheals-data.html",Table:"exceed-eheals-bl",form_module:"eheals-bl-form", task_name:"eHealth Literacy Scale" };
    m[p+"eheals-bl-form"]      ={url:H+"/form-grid/questionnaires/eheals-form.html",Table:"exceed-eheals-bl", task_name:"eHealth Literacy Scale" };
    m[p+"eq-5d-bl-data"]      ={url:H+"/form-grid/questionnaires/eq-5d-data.html",Table:"exceed-eq-5d-bl",form_module:"eq-5d-bl-form", task_name:"European Quality of Life" };
    m[p+"eq-5d-bl-form"]      ={url:H+"/form-grid/questionnaires/eq-5d-form.html",Table:"exceed-eq-5d-bl", task_name:"European Quality of Life" };
    m[p+"ffs-bl-data"]      ={url:H+"/form-grid/questionnaires/ffs-data.html",Table:"exceed-ffs-bl",form_module:"ffs-bl-form", task_name:"Flinders Fatigue Scale"};
    m[p+"ffs-bl-form"]      ={url:H+"/form-grid/questionnaires/ffs-form.html",Table:"exceed-ffs-bl", task_name:"Flinders Fatigue Scale",tp:'bl' };
    m[p+"bccci-bl-data"]      ={url:H+"/form-grid/questionnaires/bc-cci-data.html",Table:"exceed-bccci-bl",form_module:"bccci-bl-form", task_name:"British Columbia Cognitive Complaints Inventory (BCCCI)"};
    m[p+"bccci-bl-form"]      ={url:H+"/form-grid/questionnaires/bc-cci-form.html",Table:"exceed-bccci-bl", task_name:"British Columbia Cognitive Complaints Inventory (BCCCI)",tp:'bl' };
   
    m[p+"adverse-event-w3-data"]      ={url:H+"/form-grid/questionnaires/adverse-event-cbti-data.html",Table:"exceed-adverse-event-w3",form_module:"adverse-event-w3-form", task_name:"Week 3 - Adverse Event Check-in" };
    m[p+"adverse-event-w3-form"]      ={url:H+"/form-grid/questionnaires/adverse-event-cbti-form.html",Table:"exceed-adverse-event-w3", task_name:"Adverse Event Check-in",tp:'w3' };

    m[p+"adverse-event-w8-data"]      ={url:H+"/form-grid/questionnaires/adverse-event-cbti-data.html",Table:"exceed-adverse-event-w8",form_module:"adverse-event-w8-form", task_name:"Week 8 - Adverse Event Check-in" };
    m[p+"adverse-event-w8-form"]      ={url:H+"/form-grid/questionnaires/adverse-event-cbti-form.html",Table:"exceed-adverse-event-w8", task_name:"Adverse Event Check-in",tp:'w8' };
    m[p+"sdmt-w8-data"]      ={url:H+"/form-grid/questionnaires/neurocog/sdmt-data.html",Table:"exceed-sdmt-w8",form_module:"sdmt-w8-form", task_name:"Week 8 - Symbol Digit Modality Test"};
    m[p+"sdmt-w8-form"]      ={url:H+"/form-grid/questionnaires/neurocog/sdmt-form.html",Table:"exceed-sdmt-w8", task_name:"Symbol Digit Modality Test" };
    m[p+"stroop-colour-w8-data"]      ={url:H+"/form-grid/questionnaires/neurocog/stroop-colour-data.html",Table:"exceed-stroop-colour-w8",form_module:"stroop-colour-w8-form", task_name:"Week 8 - Stroop Colour" };
    m[p+"stroop-colour-w8-form"]      ={url:H+"/form-grid/questionnaires/neurocog/stroop-colour-form.html",Table:"exceed-stroop-colour-w8", task_name:"Stroop Colour" };
    m[p+"stroop-text-w8-data"]      ={url:H+"/form-grid/questionnaires/neurocog/stroop-text-data.html",Table:"exceed-stroop-text-w8",form_module:"stroop-text-w8-form", task_name:"Week 8 - Stroop Text" };
    m[p+"stroop-text-w8-form"]      ={url:H+"/form-grid/questionnaires/neurocog/stroop-text-form.html",Table:"exceed-stroop-text-w8", task_name:"Stroop Text" };
    m[p+"lct-w8-data"]      ={url:H+"/form-grid/questionnaires/neurocog/letter-cancellation-data.html",Table:"exceed-lct-w8",form_module:"lct-w8-form", task_name:"Week 8 - Letter Cancellation Task" };
    m[p+"lct-w8-form"]      ={url:H+"/form-grid/questionnaires/neurocog/letter-cancellation-form.html",Table:"exceed-lct-w8", task_name:"Letter Cancellation Task" };
    m[p+"nback2-w8-data"]      ={url:H+"/form-grid/questionnaires/neurocog/nback2-data.html",Table:"exceed-nback2-w8",form_module:"nback2-w8-form", task_name:"Week 8 - N-Back 2" };
    m[p+"nback2-w8-form"]      ={url:H+"/form-grid/questionnaires/neurocog/nback2-form.html",Table:"exceed-nback2-w8", task_name:"N-Back 2" };
    m[p+"isi-w8-data"]      ={url:H+"/form-grid/questionnaires/isi-data.html",Table:"exceed-isi-w8",form_module:"isi-w8-form", task_name:"Week 8 - Insomnia Severity Index" };
    m[p+"isi-w8-form"]      ={url:H+"/form-grid/questionnaires/isi-form.html",Table:"exceed-isi-w8", task_name:"Insomnia Severity Index" };
    m[p+"psqi-w8-data"]      ={url:H+"/form-grid/questionnaires/psqi-data.html",Table:"exceed-psqi-w8",form_module:"psqi-w8-form", task_name:"Week 8 - Pittsburgh Sleep Quality Index" };
    m[p+"psqi-w8-form"]      ={url:H+"/form-grid/questionnaires/psqi-form.html",Table:"exceed-psqi-w8", task_name:"Pittsburgh Sleep Quality Index" };
    m[p+"ess-w8-data"]      ={url:H+"/form-grid/questionnaires/ess-data.html",Table:"exceed-ess-w8",form_module:"ess-w8-form", task_name:"Week 8 - Epworth Sleepiness Scale" };
    m[p+"ess-w8-form"]      ={url:H+"/form-grid/questionnaires/ess-form.html",Table:"exceed-ess-w8", task_name:"Epworth Sleepiness Scale" };
    m[p+"gas-w8-data"]      ={url:H+"/form-grid/questionnaires/gas-data.html",Table:"exceed-gas-w8",form_module:"gas-w8-form", task_name:"Week 8 - Geriatric Anxiety Scale" };
    m[p+"gas-w8-form"]      ={url:H+"/form-grid/questionnaires/gas-form.html",Table:"exceed-gas-w8", task_name:"Geriatric Anxiety Scale" };
    m[p+"gad7-w8-data"]      ={url:H+"/form-grid/questionnaires/gad7-data.html",Table:"exceed-gad7-w8",form_module:"gad7-w8-form", task_name:"Week 8 - Generalized Anxiety Disorder" };
    m[p+"gad7-w8-form"]      ={url:H+"/form-grid/questionnaires/gad7-form.html",Table:"exceed-gad7-w8", task_name:"Generalized Anxiety Disorder" };
    m[p+"eq-5d-w8-data"]      ={url:H+"/form-grid/questionnaires/eq-5d-data.html",Table:"exceed-eq-5d-w8",form_module:"eq-5d-w8-form", task_name:"Week 8 - European Quality of Life" };
    m[p+"eq-5d-w8-form"]      ={url:H+"/form-grid/questionnaires/eq-5d-form.html",Table:"exceed-eq-5d-w8", task_name:"European Quality of Life" };
    m[p+"ffs-w8-data"]      ={url:H+"/form-grid/questionnaires/ffs-data.html",Table:"exceed-ffs-w8",form_module:"ffs-w8-form", task_name:"Week 8 - Flinders Fatigue Scale"};
    m[p+"ffs-w8-form"]      ={url:H+"/form-grid/questionnaires/ffs-form.html",Table:"exceed-ffs-w8", task_name:"Flinders Fatigue Scale",tp:'bl' };
    m[p+"bccci-w8-data"]      ={url:H+"/form-grid/questionnaires/bc-cci-data.html",Table:"exceed-bccci-w8",form_module:"bccci-w8-form", task_name:"Week 8 - British Columbia Cognitive Complaints Inventory (BCCCI)"};
    m[p+"bccci-w8-form"]      ={url:H+"/form-grid/questionnaires/bc-cci-form.html",Table:"exceed-bccci-w8", task_name:"British Columbia Cognitive Complaints Inventory (BCCCI)",tp:'bl' };



    m[p+"sdmt-w16-data"]      ={url:H+"/form-grid/questionnaires/neurocog/sdmt-data.html",Table:"exceed-sdmt-w16",form_module:"sdmt-w16-form", task_name:"Week 16 - Symbol Digit Modality Test"};
    m[p+"sdmt-w16-form"]      ={url:H+"/form-grid/questionnaires/neurocog/sdmt-form.html",Table:"exceed-sdmt-w16", task_name:"Symbol Digit Modality Test" };
    m[p+"stroop-colour-w16-data"]      ={url:H+"/form-grid/questionnaires/neurocog/stroop-colour-data.html",Table:"exceed-stroop-colour-w16",form_module:"stroop-colour-w16-form", task_name:"Week 16 - Stroop Colour" };
    m[p+"stroop-colour-w16-form"]      ={url:H+"/form-grid/questionnaires/neurocog/stroop-colour-form.html",Table:"exceed-stroop-colour-w16", task_name:"Stroop Colour" };
    m[p+"stroop-text-w16-data"]      ={url:H+"/form-grid/questionnaires/neurocog/stroop-text-data.html",Table:"exceed-stroop-text-w16",form_module:"stroop-text-w16-form", task_name:"Week 16 - Stroop Text" };
    m[p+"stroop-text-w16-form"]      ={url:H+"/form-grid/questionnaires/neurocog/stroop-text-form.html",Table:"exceed-stroop-text-w16", task_name:"Stroop Text" };
    m[p+"lct-w16-data"]      ={url:H+"/form-grid/questionnaires/neurocog/letter-cancellation-data.html",Table:"exceed-lct-w16",form_module:"lct-w16-form", task_name:"Week 16 - Letter Cancellation Task" };
    m[p+"lct-w16-form"]      ={url:H+"/form-grid/questionnaires/neurocog/letter-cancellation-form.html",Table:"exceed-lct-w16", task_name:"Letter Cancellation Task" };
    m[p+"nback2-w16-data"]      ={url:H+"/form-grid/questionnaires/neurocog/nback2-data.html",Table:"exceed-nback2-w16",form_module:"nback2-w16-form", task_name:"Week 16 - N-Back 2" };
    m[p+"nback2-w16-form"]      ={url:H+"/form-grid/questionnaires/neurocog/nback2-form.html",Table:"exceed-nback2-w16", task_name:"N-Back 2" };
    m[p+"isi-w16-data"]      ={url:H+"/form-grid/questionnaires/isi-data.html",Table:"exceed-isi-w16",form_module:"isi-w16-form", task_name:"Insomnia Severity Index" };
    m[p+"isi-w16-form"]      ={url:H+"/form-grid/questionnaires/isi-form.html",Table:"exceed-isi-w16", task_name:"Insomnia Severity Index" };
    m[p+"psqi-w16-data"]      ={url:H+"/form-grid/questionnaires/psqi-data.html",Table:"exceed-psqi-w16",form_module:"psqi-w16-form", task_name:"Week 16 - Pittsburgh Sleep Quality Index" };
    m[p+"psqi-w16-form"]      ={url:H+"/form-grid/questionnaires/psqi-form.html",Table:"exceed-psqi-w16", task_name:"Pittsburgh Sleep Quality Index" };
    m[p+"ess-w16-data"]      ={url:H+"/form-grid/questionnaires/ess-data.html",Table:"exceed-ess-w16",form_module:"ess-w16-form", task_name:"Week 16 - Epworth Sleepiness Scale" };
    m[p+"ess-w16-form"]      ={url:H+"/form-grid/questionnaires/ess-form.html",Table:"exceed-ess-w16", task_name:"Epworth Sleepiness Scale" };
    m[p+"gas-w16-data"]      ={url:H+"/form-grid/questionnaires/gas-data.html",Table:"exceed-gas-w16",form_module:"gas-w16-form", task_name:"Week 16 - Geriatric Anxiety Scale" };
    m[p+"gas-w16-form"]      ={url:H+"/form-grid/questionnaires/gas-form.html",Table:"exceed-gas-w16", task_name:"Geriatric Anxiety Scale" };
    m[p+"gad7-w16-data"]      ={url:H+"/form-grid/questionnaires/gad7-data.html",Table:"exceed-gad7-w16",form_module:"gad7-w16-form", task_name:"Week 16 - Generalized Anxiety Disorder" };
    m[p+"gad7-w16-form"]      ={url:H+"/form-grid/questionnaires/gad7-form.html",Table:"exceed-gad7-w16", task_name:"Generalized Anxiety Disorder" };
    m[p+"eq-5d-w16-data"]      ={url:H+"/form-grid/questionnaires/eq-5d-data.html",Table:"exceed-eq-5d-w16",form_module:"eq-5d-w16-form", task_name:"Week 16 - European Quality of Life" };
    m[p+"eq-5d-w16-form"]      ={url:H+"/form-grid/questionnaires/eq-5d-form.html",Table:"exceed-eq-5d-w16", task_name:"European Quality of Life" };
    m[p+"ffs-w16-data"]      ={url:H+"/form-grid/questionnaires/ffs-data.html",Table:"exceed-ffs-w16",form_module:"ffs-w16-form", task_name:"Week 16 - Flinders Fatigue Scale"};
    m[p+"ffs-w16-form"]      ={url:H+"/form-grid/questionnaires/ffs-form.html",Table:"exceed-ffs-w16", task_name:"Flinders Fatigue Scale" };
    m[p+"bccci-w16-data"]      ={url:H+"/form-grid/questionnaires/bc-cci-data.html",Table:"exceed-bccci-w16",form_module:"bccci-w16-form", task_name:"Week 16 - British Columbia Cognitive Complaints Inventory (BCCCI)"};
    m[p+"bccci-w16-form"]      ={url:H+"/form-grid/questionnaires/bc-cci-form.html",Table:"exceed-bccci-w16", task_name:"British Columbia Cognitive Complaints Inventory (BCCCI)",};


    m[p+"randomisation-table-data"]      ={url:H+"/form-grid/backend/randomisation-table-data.html",   Table:"exceed-randomisation",form_module:"randomisation-table-form",task_name:"Randomisation Table"};
    m[p+"randomisation-table-form"]      ={url:H+"/form-grid/backend/randomisation-table-form.html",Table:"exceed-randomisation", task_name:"Randomisation Table" };
    
    m[p+"registration-data"]      ={url:H+"/form-grid/screening/registration-data.html",   Table:"exceed-participant",form_module:"registration-form",task_name:"Participant"};
    m[p+"registration-form"]      ={url:H+"/form-grid/screening/registration-form.html",Table:"exceed-participant",Table2:"exceed-screening", task_name:"Participant" };
    
    m[p+"randomisation-check-data"]      ={url:H+"/form-grid/backend/randomisation-check-data.html",   Table:"exceed-progress",task_name:"Randomisation Check"};
    m[p+"progress-new-form"]      ={url:H+"/form-grid/backend/progress-new-form.html",   Table:"exceed-progress",task_name:"Progress form"};
    m[p+"progress-mod-form"]      ={url:H+"/form-grid/backend/progress-mod-form.html",   Table:"exceed-progress",task_name:"Progress form"};
 
    m[p+"start-date"]      ={url:H+"/form-grid/backend/date-start-form.html",   Table:"exceed-progress", task_name:"Start Date"};
    m[p+"send-email-control-data"]      ={url:H+"/form-grid/backend/send-email-control-data.html",   Table:"exceed-progress"};
    m[p+"send-email-treatment-data"]      ={url:H+"/form-grid/backend/send-email-treatment-data.html",   Table:"exceed-progress"};
    m[p+"send-email"]      ={url:H+"/form-grid/backend/send-email-form.html",   Table:"exceed-progress", task_name:"send email"};
    m[p+"fitbit-sent"]      ={url:H+"/form-grid/backend/fitbit-sent-form.html",   Table:"exceed-progress", task_name:"Date - Fitbit Sent"};

    if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    }

})();
