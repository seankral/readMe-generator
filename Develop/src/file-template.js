const tableOfContents = (array) => {
    const tocString = '';
    array.forEach(function(item) {
        tocString += ('-' + item + '\n')
    });
    return tocString;
};


module.exports = data => {
    return ` 
        # ${data.title}

        ## Description
        ${data.description}

        ## Table of Content
        ${tableOfContents(data.tableOfContents)}
    `;
}


    
  
  