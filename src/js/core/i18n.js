Namespace.create('xing.core');

xing.core.I18n = function () {
  'use strict';

  this.en = {
    messages: {
      ticketCached: {
        title: 'Ticket print',
        body: 'Ticket is stored! Please navigate to another if you want ' +
          'print one ticket more.'
      }
    },
    modal: {
      collaboratorPrompt: 'Please enter your collaborators!\n' +
        'Note: Separate the names with a comma e.g. "Jeffrey, Walter"',
      heading: 'Print preview',
      select: 'Select another:',
      action: {
        addCollaborator: 'Collaborators',
        remove: 'Remove ticket form the list',
        print: 'Print',
        cancel: 'Cancel'
      },
      ticketCount: 'You are printing tickets',
      pageCount: ' on pages'
    },
    ticket: {
      collaborator: {
        title:  'Pairing partner',
        action: '<button class="aui-button gm-change-collaborators gm-print-hidden">Collaborators</button>'
      },
      component: { title: 'Component' },
      closed: {
        title: 'End date',
        body:  'Day | Time'
      },
      created:     { title: 'Created' },
      description: { title: 'Description' },
      dueDate:     { title: 'Due date' },
      reporter:    { title: 'Reporter' },
      storyPoints: { title: 'Story Points' },
      target:      { title: 'Target' },
      type:        { title: 'Type' },
      start:    {
        title: 'Start Progress',
        body:  'Day | Time'
      }
    }
  };

  this.local = function (lang) {
    return this[lang || 'en'];
  };

};
