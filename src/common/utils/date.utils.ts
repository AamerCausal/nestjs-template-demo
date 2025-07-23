export class DateUtils {
    /**
     * Format date to ISO string without time
     */
    static formatDate(date: Date): string {
        return date.toISOString().split('T')[0];
    }

    /**
     * Check if date is today
     */
    static isToday(date: Date): boolean {
        const today = new Date();
        return this.formatDate(date) === this.formatDate(today);
    }

    /**
     * Get date difference in days
     */
    static getDaysDifference(date1: Date, date2: Date): number {
        const diffTime = Math.abs(date2.getTime() - date1.getTime());
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }

    /**
     * Add days to date
     */
    static addDays(date: Date, days: number): Date {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    /**
     * Check if date is in the past
     */
    static isPast(date: Date): boolean {
        return date < new Date();
    }

    /**
     * Check if date is in the future
     */
    static isFuture(date: Date): boolean {
        return date > new Date();
    }
}