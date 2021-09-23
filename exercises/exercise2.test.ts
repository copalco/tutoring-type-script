test('Variables and parameters', () => {
    const name = 'Piotrek'
    function firstName(): void {
        const name = 'Ryszard'
    }
    firstName()
    expect(name).toStrictEqual() //fill with value you expect to get
})