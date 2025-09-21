import React from 'react';

interface ClauseCardProps {
    clause: {
        original: string;
        plainMeaning: string;
        risks: string[];
        recommendations: string[];
    };
}

const ClauseCard: React.FC<ClauseCardProps> = ({ clause }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Clause Breakdown</h3>
            <div className="mt-2">
                <h4 className="font-medium text-gray-700">Original Clause:</h4>
                <p className="text-gray-600">{clause.original}</p>
            </div>
            <div className="mt-2">
                <h4 className="font-medium text-gray-700">Plain Meaning:</h4>
                <p className="text-gray-600">{clause.plainMeaning}</p>
            </div>
            <div className="mt-2">
                <h4 className="font-medium text-gray-700">Risks:</h4>
                <ul className="list-disc list-inside text-gray-600">
                    {clause.risks.map((risk, index) => (
                        <li key={index}>{risk}</li>
                    ))}
                </ul>
            </div>
            <div className="mt-2">
                <h4 className="font-medium text-gray-700">Recommendations:</h4>
                <ul className="list-disc list-inside text-gray-600">
                    {clause.recommendations.map((recommendation, index) => (
                        <li key={index}>{recommendation}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ClauseCard;