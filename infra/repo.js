var repo ={
        members: [ {name: 'John', id:1, mode: ''},
                    {name: 'Simon', id:2, mode: ''},
                    {name: 'Dave', id:3, mode: ''},
                    {name: 'Elizabeth', id:4, mode: ''}
                    ],
        events: [{name: 'Johns BirthDay', id:1, mode: '' }],
        expenses: [{id: 1,
            amount: 20, 
            expenseBy: 1,
            expenseByName: 'John',
            expenseFor: [1,2],
            expenseForName: ['John', 'Simon'],
            description: 'some random party',
            mode:''}]
    };