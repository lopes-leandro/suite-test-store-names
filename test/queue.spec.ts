import { expect } from 'chai';
import { Queue } from '../src/app';

describe('Queue', () => {
    it('deve inicializar o construtor sem passar valores', () => {
        const s = new Queue<string>();
        expect(s.size()).to.equal(0);
    });
    it('deve inicializar o contrutor passando valores', () => {
        const s = new Queue<string>(['Agnei', 'Leandro', 'Ygor', 'Luana', 'Guilherme']);
        expect(s.size()).to.equal(5);
    });
    it('deve adicionar um novo elemento após a inicialização do construtor', () => {
        const s = new Queue<string>(['Agnei', 'Leandro', 'Ygor', 'Luana', 'Guilherme']);
        expect(s.size()).to.equal(5);
        s.push('Bruno');
        expect(s.size()).to.equal(6);
    });
    it('deve retornar o primeiro elemento da lista', () => {
        const s = new Queue<string>(['Agnei', 'Leandro', 'Ygor', 'Luana', 'Guilherme']);
        expect(s.shift()).to.equal('Agnei');
    });
    it('deve retornar o último elemento adicionado a lista', () => {
        const s = new Queue<string>(['Agnei', 'Leandro', 'Ygor', 'Luana', 'Guilherme']);
        s.push('Bruno');
        expect(s.pop()).to.equal('Bruno');
    });
    it('deve verificar se a lista está vazia quando não há dados', () => {
        const s = new Queue<number>([]);
        expect(s.isEmpty()).to.equal(true);
    });
    it('deve retornar indefinido ao tentar obter o primeiro elemento de uma lista vazia', () => {
        const s = new Queue<number>();
        expect(s.shift()).to.equal(undefined);
    });
    it('deve retornar indefinido ao tentar obter o último elemento de uma lista vazia', () => {
        const s = new Queue<number>();
        expect(s.pop()).to.equal(undefined);
    });
});