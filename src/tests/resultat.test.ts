import { determineHeure} from '../corodinsite';
import { expect, describe, it } from 'vitest';

describe('determineHeure', () => {
    it('should return 0 when 1 + 1+1 because 1+1+rien -2', () => {
        expect(determineHeure(1, 1,1)).toBe(0);
    });

    it('should return 6 when 2+2+2', () => {
        expect(determineHeure(2, 2,2)).toBe(6);
    });

    it('should return 4, because (2+2+ 1*2 +2)/2, so 8/2=4 ', () => {
        expect(determineHeure(2, 2, 1)).toBe(4);
    });

    it('should return 0 when 1+1+2 because 1+1+rien -2', () => {
        expect(determineHeure(1, 1,2)).toBe(0);
    });

    it('should return 5 because 1+2+ 1*2 -2 +2 ', () => {
        expect(determineHeure(1, 2,1)).toBe(5);
    });
});