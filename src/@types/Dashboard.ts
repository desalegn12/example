import { Timestamp } from 'firebase/firestore';

type ViewSettings = {
    chartType: string;
    chartHeight: number;
    grid: {
        sm: number;
        md: number;
        lg: number;
        xl: number;
    };
};

export type AggregateField = {
    name: string;
    aggregation: "Sum" | "Avg" | "Count"; 
    distinct?: boolean;
};

type OrderBy = {
    name: string;
    direction: "ASC" | "DESC"; 
};

type JobTypes = "summarizedByDateAggregation" | "dataGrid" | "gaCategories" | "HOLISTIC_SEARCH_PPC_CONVERTERS" | "HOLISTIC_SEARCH_SEO_AUTO_INSIGHTS" | "countDimensionDistinctYoy";


export type SQL = {
    table: string;
    dimensions: string[];
    dateAggregationFields: string[];
    aggregateFields: AggregateField[];
    includeLastYear: boolean;
    includeYoy: boolean;
    limitRows: boolean;
    orderBy: OrderBy[];
    jobType: JobTypes; 
};

type NoDataMessage = {
    title: string;
    subheading: string;
};

type Labels = {
    title: string;
    helpSubheading: string;
    includeMetricInHeading?: boolean;
    noDataMessage?: NoDataMessage;
};

export type DashboardViewConfig = {
    id: string;
    position: number;
    dataModelId: string;
    viewSettings: ViewSettings;
    sql: SQL;
    labels: Labels;
};

export type InitialFilterPanelState = {
    colType: string;
    id: number;
    value: string;
    columnField: string;
    operatorValue: string;
};

export type DashboardTab = {
    title: string;
    iconifyIconId: string;
    initialFilterPanelState: InitialFilterPanelState[] | null;
    availableFilterFields: string[];
    tabIndex: number;
    maxAndMinDates: {
        table: string;
        dateDimension: string;
        jobType: string;
    };
    dataViews: DashboardViewConfig[];
};

export type Dashboard = {
    id: string,
    updated?: Timestamp,
    tabs: DashboardTab[]
}