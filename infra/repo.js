var repo = {
    members: [{name: 'John', id: 1, mode: ''}, {name: 'Simon', id: 2, mode: ''}, {name: 'Dave', id: 3, mode: ''}, {name: 'Elizabeth', id: 4, mode: ''}],
    events: [{name: 'event 1', id: 1, mode: '' }, {name: 'event 2', id: 2, mode: '' }],
    expenses: [
        { eventId: 1, id: 1, amount: 20, expenseBy: 1, expenseByName: 'John', expenseFor: [1, 2], expenseForName: ['John', 'Simon'], description: 'event 1', mode: ''}, 
        { eventId: 2, id: 1, amount: 20, expenseBy: 1, expenseByName: 'John', expenseFor: [1, 2], expenseForName: ['John', 'Simon'], description: 'event 2', mode: ''}]
};