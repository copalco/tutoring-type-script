test('Variables and parameters', () => {
    let name: string | void = 'Piotrek'
    function firstName(): void {
        let name = 'Ryszard'
    }
    name = firstName()
    expect(name).toStrictEqual('Ryszard')
})