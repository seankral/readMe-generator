const tableOfContents = (array) => {
    let tocString = '';
    array.forEach(function(item) {
        tocString += ('- ' + '[' + item + ']' + '(#' + item.toLowerCase() + ')' + '\n')
    });
    return tocString;
};

function renderLicenseLink(license) {
    let licenseLinkString = '';
    if (license === 'No license' ) {
        return '';
    } else if (license === 'The Unlicense') {
        licenseLinkString += ('## License' + '\n' + '### ' + license + '\n' + 'For information about this license access the link below.' + '\n' + '[The Unlicense](http://unlicense.org/)')
    } else if (license === 'Mozilla Public License 2.0') {
        licenseLinkString += ('## License' + '\n' + '### ' + license + '\n' + 'For information about this license access the link below.' + '\n' + '[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)') 
    } else if (license === 'GNU AGPLv3') {
        licenseLinkString += ('## License' + '\n' + '### ' + license + '\n' + 'For information about this license access the link below.' + '\n' + '[GNU AGPLv3](https://www.gnu.org/licenses/gpl-3.0)')
    }
    return licenseLinkString;    
};

function renderLicenseBadge(license) {
    let licenseBadgeString = '';
    if (license === 'No license') {
        return ''
    } else if (license === 'The Unlicense') {
        licenseBadgeString += '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
    } else if (license === 'Mozilla Public License 2.0') {
        licenseBadgeString += '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    } else if (license === 'GNU AGPLv3') {
        licenseBadgeString += '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    }
    return licenseBadgeString;
}

module.exports = data => {
    return ` 
        # ${data.title}

        ${renderLicenseBadge(data.license)}

        ## Description
        ${data.description}

        ## Table of Content
        ${tableOfContents(data.tableOfContents)}

        ## Installation
        ${data.installation}

        ## Usage
        ${data.usage}

        ## Tests
        ${data.tests}

        ## contributing
        ${data.contributing}

        ${renderLicenseLink(data.license)}

        ## Questions
        If you have any questions you can contact me at:
        [Email](mailto:${data.email})
        [GitHub](https://github.com/${data.github})
    `;
}


    
  
  