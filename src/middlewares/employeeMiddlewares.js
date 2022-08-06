function validateName(req, res, next) {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ message: 'name not found' })
    }
    next()
}

function validateCpf(req, res, next) {
    const { cpf } = req.body;
    if (!cpf) {
        return res.status(400).json({ message: 'cpf not found' })
    }
    next()
}

function validateDepartment(req, res, next) {
    const { department } = req.body;
    if (!department) {
        return res.status(400).json({ message: 'department not found' })
    }

    if (typeof department !== 'number') {
        return res.status(400).json({ message: 'department is not number' })
    }
    next()
}

function validateSalary(req, res, next) {
    const { salary } = req.body;
    if (!salary) {
        return res.status(400).json({ message: 'salary not found' })
    }
    next()
}

function validateBirthDate(req, res, next) {
    const { birthDate } = req.body;
    if (!birthDate) {
        return res.status(400).json({ message: 'birthDate not found' })
    }
    next()
}



module.exports = {
    validateName,
    validateCpf,
    validateDepartment,
    validateSalary,
    validateBirthDate
}