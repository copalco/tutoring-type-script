test('Variables and parameters', () => {
    const name = 'Piotrek'
    function firstName(name: string): string {
        return 'Ryszard'
    }
    expect(firstName('Ida')).toStrictEqual('Ida')
})