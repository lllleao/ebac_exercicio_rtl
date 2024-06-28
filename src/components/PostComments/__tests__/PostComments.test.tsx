import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '..';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    })

    test('Deve adicionar dois comentários', () => {
        const {debug} = render(<PostComment/>);
        const botao = screen.getByTestId('btn-post')
        fireEvent.change(screen.getByTestId('campo-post'), {
            target: {
                value: 'Muito legal!'
            }
        })

        fireEvent.click(botao)

        fireEvent.change(screen.getByTestId('campo-post'), {
            target: {
                value: 'Que incrível!'
            }
        })

        fireEvent.click(botao)
        // eslint-disable-next-line testing-library/no-debugging-utils
        debug()
        expect(screen.getByText('Muito legal!')).toBeInTheDocument()
    })
})