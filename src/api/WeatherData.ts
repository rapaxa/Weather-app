export const fetchData = async (url: string) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        } else {

            return await response.json();
        }

    } catch (error) {
        console.error(error);
        throw error;
    }
};
