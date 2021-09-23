test('Variables and parameters', () => {
    let name = 'Piotrek'
    function firstName(firstName: string): string {
        return name
    }
    name = firstName('Ryszard')
    expect(name).toStrictEqual('Ryszard')
})