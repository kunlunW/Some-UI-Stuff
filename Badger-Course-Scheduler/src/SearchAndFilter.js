class SearchAndFilter {
  searchAndFilter(courses, search, subject, minimumCredits, maximumCredits) {

    if(search !== '') {
      let coursesAfterSearch = [];
      
      for(const classes of Object.values(courses)) {
        for(const keyword of classes.keywords) {
          if(keyword.includes(search)) {
            coursesAfterSearch.push(classes);
            break;
          }
        }
      }
      courses = coursesAfterSearch;
    }
    
    
    if(subject !== 'All') {
      let coursesAfterSubject = [];

      for(const classes of Object.values(courses)) {
        // if the subjust matches
        if(classes.subject === subject)

          coursesAfterSubject.push(classes)
      }
      courses = coursesAfterSubject;
    }

    if(minimumCredits !== ''){
      let coursesAfterMinimumCredits = [];

      for(const classes of Object.values(courses)) {
        var min = parseInt(minimumCredits)
        if(classes.credits >= min){
          coursesAfterMinimumCredits.push(classes);
        }
        courses = coursesAfterMinimumCredits;
      }
    }


      if(maximumCredits !== '') {
        let coursesAfterMaximumCredits = [];
  
        for(const classes of Object.values(courses)) {
          var max = parseInt(maximumCredits);
          if(classes.credits <= max)
            coursesAfterMaximumCredits.push(classes);
        }
        courses = coursesAfterMaximumCredits;
      }

      
  

      return courses;

    }


    }
  
export default SearchAndFilter;
