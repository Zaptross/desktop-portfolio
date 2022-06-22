export type Vec2 = {
    x: number;
    y: number;
};

export function vec2Diff(a: Vec2, b: Vec2): Vec2 {
    return {
        x: b.x - a.x,
        y: b.y - a.y,
    };
}

export function vec2Sum(...vec2s: Vec2[]): Vec2 {
    return vec2s.reduce(
        (acc, cur) => ({
            x: acc.x + cur.x,
            y: acc.y + cur.y,
        }),
        { x: 0, y: 0 }
    );
}

export function vec2FromMouseEvent(e: React.MouseEvent<HTMLElement>): Vec2 {
    return {
        x: e.clientX,
        y: e.clientY,
    };
}
