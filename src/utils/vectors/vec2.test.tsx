import React from 'react';
import { Vec2, vec2Diff, vec2FromMouseEvent, vec2Sum } from './vec2';

describe('vec2FromMouseEvent()', () => {
    it('returns a Vec2', () => {
        const e = {
            clientX: 100,
            clientY: 100,
        };

        expect(vec2FromMouseEvent(e as React.MouseEvent<HTMLElement>)).toEqual({
            x: 100,
            y: 100,
        });
    });
});

describe('vec2Diff()', () => {
    test('returns the difference between two vec2s', () => {
        const a = { x: 100, y: 100 };
        const b = { x: 200, y: 200 };

        expect(vec2Diff(a, b)).toEqual({ x: 100, y: 100 });
    });

    test('returns differences that are order specific', () => {
        const a = { x: 100, y: 100 };
        const b = { x: 200, y: 200 };

        expect(vec2Diff(a, b)).toEqual({ x: 100, y: 100 });
        expect(vec2Diff(b, a)).toEqual({ x: -100, y: -100 });

        expect(vec2Diff(b, a)).not.toEqual(vec2Diff(a, b));
    });
});

describe('vec2Sum()', () => {
    it('returns the sum of two vec2s', () => {
        const a = { x: 100, y: 100 };
        const b = { x: 200, y: 200 };
        const c = { x: 300, y: 300 };

        expect(vec2Sum(a, b)).toEqual({ x: 300, y: 300 });
    });

    it('returns the sum of any number of vec2s', () => {
        const toSum: Vec2[] = [];

        for (let i = 1; i <= 10; i++) {
            toSum.push({ x: i, y: i });
        }

        expect(vec2Sum(...toSum)).toEqual({ x: 55, y: 55 });
    });
});
