module.exports = {
  uog: {
    webadvisorTokenUrl:
      'https://webadvisor.uoguelph.ca/WebAdvisor/WebAdvisor?CONSTITUENCY=WBST&type=P&pid=ST-WESTS12A&TOKENIDX=',
    webadvisorCourseUrl:
      'https://webadvisor.uoguelph.ca/WebAdvisor/WebAdvisor?SS=1&APP=ST&CONSTITUENCY=WBST&TOKENIDX=',
    webadvisorCourseSearchData: {
      'DATE.VAR1': '',
      'DATE.VAR2': '',
      'LIST.VAR1_CONTROLLER': 'LIST.VAR1',
      'LIST.VAR1_MEMBERS': 'LIST.VAR1*LIST.VAR2*LIST.VAR3*LIST.VAR4',
      'LIST.VAR1_MAX': '5',
      'LIST.VAR2_MAX': '5',
      'LIST.VAR3_MAX': '5',
      'LIST.VAR4_MAX': '5',
      'LIST.VAR1_1': '',
      'LIST.VAR2_1': '',
      'LIST.VAR3_1': '',
      'LIST.VAR4_1': '',
      'LIST.VAR1_2': '',
      'LIST.VAR2_2': '',
      'LIST.VAR3_2': '',
      'LIST.VAR4_2': '',
      'LIST.VAR1_3': '',
      'LIST.VAR2_3': '',
      'LIST.VAR3_3': '',
      'LIST.VAR4_3': '',
      'LIST.VAR1_4': '',
      'LIST.VAR2_4': '',
      'LIST.VAR3_4': '',
      'LIST.VAR4_4': '',
      'LIST.VAR1_5': '',
      'LIST.VAR2_5': '',
      'LIST.VAR3_5': '',
      'LIST.VAR4_5': '',
      'VAR7': '',
      'VAR8': '',
      'VAR3': '',
      'VAR6': '',
      'VAR21': '',
      'VAR9': '',
      'SUBMIT_OPTIONS': '',
    },
    calendarUrls: {
      disclaimer:
        'https://www.uoguelph.ca/registrar/calendars/undergraduate/%s/disclaim/index.shtml',
      courseDescriptions:
        'https://www.uoguelph.ca/registrar/calendars/undergraduate/%s/c12/index.shtml',
      courseDescriptionSection:
        'https://www.uoguelph.ca/registrar/calendars/undergraduate/%s/c12/c12%s.shtml',
    },
    descriptionUrl:
      'https://www.uoguelph.ca/registrar/calendars/undergraduate/current/c12/c12{CODE}.shtml',
  },
  wlu: {
    schedulemeCourseUrl: 'https://scheduleme.wlu.ca/vsb/getclassdata.jsp',
    schedulemeSearchUrl: 'https://scheduleme.wlu.ca/vsb/add_suggest.jsp',
    seasons: { W: '01', S: '05', F: '09' },
  },
};
