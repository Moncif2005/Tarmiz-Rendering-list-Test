import Table from './Table';

const Content = () => {
    const tables = [
        {
            id: 1,
            title: "Pain",
            p: "Shinra Tensi",
        },
        {
            id: 2,
            title: "Madara",
            p: "Hashiramaaaaaaaa",
        },
        {
            id: 3,
            title: "Messi",
            p: "Barca PSG Inter Miami",
        },
        {
            id: 4,
            title: "CR7",
            p: "Man unt Real Madrid Juventus Man unt El Nasser",
        },
        
    ];

    const myTables = tables.map((table) => {
        return <Table key={table.id} title={table.title} p={table.p} />;
    });

    return (
        <>
            {myTables}
        </>
    );
};

export default Content;
