import { type RouteConfig, index, route, prefix } from "@react-router/dev/routes";

export default [
    route(":lang", "routes/layout.tsx",
            [
                route("home","routes/home.tsx" ),
                ...prefix("cases", [
                        index("routes/case-home.tsx" ),
                        route("medical-bot","routes/case-telegram-medical-bot.tsx", [
                            ...prefix("problem-solution", [
                                index("routes/case-telegram-medical-bot-problem-solution.tsx")
                            ]),
                            ...prefix("mvp", [
                                index("routes/case-telegram-medical-bot-mvp.tsx")
                            ]),
                            ...prefix("roadmap", [
                                index("routes/case-telegram-medical-bot-roadmap.tsx")
                            ]),
                            ...prefix("values-for-business", [
                                index("routes/case-telegram-medical-bot-values.tsx")
                            ]),
                            ...prefix("techstack", [
                                index("routes/case-telegram-medical-bot-techstack.tsx")
                            ])
                        ] ),
                        route("massage-studio","routes/case-massage-studio.tsx", [
                            ...prefix("problem-solution", [
                                index("routes/case-massage-studio-problem-solution.tsx")
                            ]),
                            ...prefix("mvp", [
                                index("routes/case-massage-studio-mvp.tsx")
                            ]),
                            ...prefix("roadmap", [
                                index("routes/case-massage-studio-roadmap.tsx")
                            ]),
                            ...prefix("values-for-business", [
                                index("routes/case-massage-studio-value.tsx")
                            ]),
                            ...prefix("techstack", [
                                index("routes/case-massage-studio-techstack.tsx")
                            ])
                        ] ),
                        route("passenger-transportation-management-system","routes/case-snow-bus.tsx",
                            [
                            ...prefix("problem-solution", [
                                index("routes/case-snow-bus-problem-solution.tsx")
                            ]),
                            ...prefix("mvp", [
                                index("routes/case-snow-bus-mvp.tsx")
                            ]),
                            ...prefix("roadmap", [
                                index("routes/case-snow-bus-roadmap.tsx")
                            ]),
                            ...prefix("values-for-business", [
                                index("routes/case-snow-bus-value.tsx")
                            ]),
                            ...prefix("techstack", [
                                index("routes/case-snow-bus-techstack.tsx")
                            ])
                        ]
                ),
                    ]
                ),
                route("contacts","routes/contacts.tsx" )
            ]
        ),


] satisfies RouteConfig;

