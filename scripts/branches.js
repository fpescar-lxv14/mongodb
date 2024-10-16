db.createCollection("branches", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [
                "name",
                "address.street",
                "address.number",
                "address.zipcode",
                "manager",
            ],
            properties: {
                name: {
                    bsonType: "string",
                    minLength: 4,
                    maxLength: 50,
                    description: "Ingrese un nombre de sucursal que posea entre 4 y 50 caracteres"
                },
                address: {
                    bsonType: "object",
                    properties: {
                        street: {
                            bsonType: "string",
                            minLength: 2,
                            maxLength: 150,
                        },
                        number: {
                            bsonType: "number",
                            minimum: 1,
                            maximum: 999999,
                        },
                        details: {
                            bsonType: "string",
                        },
                        city: {
                            bsonType: "string",
                            minLength: 4,
                        },
                        state: {
                            bsonType: "string",
                            minLength: 4,
                        },
                        country: {
                            bsonType: "string",
                            minLength: 4,
                        },
                        zipcode: {
                            bsonType: "string",
                            pattern: "^[A-Za-z0-9\\s-]{2,6}$",
                        },
                        geolocation: {
                            bsonType: "object",
                            properties: {
                                latitude: {
                                    bsonType: "number"
                                },
                                longitude: {
                                    bsonType: "number"
                                },
                            }
                        }
                    }
                },
                manager: {
                    bsonType: "string",
                },
                employees: {
                    bsonType: "array",
                    items: {
                        bsonType: "object",
                        properties: {
                            charge: {
                                bsonType: "string",
                                description: "Cargo del empleado",
                            },
                            employeeData: {
                                bsonType: "object",
                                properties: {
                                    first_name: {
                                        bsonType: "string",
                                        minLength: 2,
                                        pattern: "^\D+$"
                                    },
                                    last_name: {
                                        bsonType: "string",
                                        minLength: 2,
                                        pattern: "^\D+$"
                                    },
                                    birthdate: {
                                        bsonType: "date",
                                        description: "La fecha de nacimiento debe ser mayor al 1/1/1900 y menor al dia de hoy"
                                    },
                                    id_type: {
                                        bsonType: "string",
                                        enum: [
                                            "DNI",
                                            "DNIE",
                                            "CI",
                                            "LC",
                                            "LE",
                                            "CUIT",
                                            "RUC",
                                            "PASS"
                                        ],
                                    },
                                    id_number: {
                                        bsonType: "string",
                                        pattern: "^[A-Za-z0-9]+$",
                                    },
                                    degree: {
                                        bsonType: "string",
                                        enum: ["PRI", "SEC", "TER", "UNI", "POS", "DOC", "LIC"]
                                    },
                                },
                            },
                            hiredAt: {
                                bsonType: "date",
                                description: "Fecha de contratación del empleado"
                            },
                            active: {
                                bsonType: "bool",
                            },
                            status: {
                                bsonType: "object",
                                properties: {
                                    type: {
                                        bsonType: "string",
                                        enum: [
                                            "ALTA",
                                            "BAJA",
                                            "SUSPENSION",
                                            "VACACIONES",
                                            "LICENCIA"
                                        ]
                                    },
                                    details: {
                                        bsonType: "string"
                                    },
                                    time: {
                                        bsonType: "object",
                                        properties: {
                                            start: {
                                                bsonType: "date"
                                            },
                                            end: {
                                                bsonType: "date"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                    }
                }
            }
        }
    }
});