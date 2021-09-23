test('Variables and parameters', () => {
    let name = 'Piotrek'
    function childFirstname(): string {
        let name = 'Ula'
        return 'Ida'
    }
    function firstName(): string {
        let name = 'Ryszard'
        return name
    }
    name = firstName()
    name = childFirstname()
    expect(name).toStrictEqual() //fill with value you expect to get
})