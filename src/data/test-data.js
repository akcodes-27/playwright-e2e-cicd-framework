const data={
    url:{
        homePageUrl: process.env.BASE_URL||'https://automationexercise.com/',
        loginPageUrl: process.env.LOGINPAGE_URL||'https://automationexercise.com/login',
        productPageUrl: process.env.PRODUCTPAGE_URL||'https://automationexercise.com/products',
        cartPageUrl: process.env.CARTPAGE_URL||'https://automationexercise.com/view_cart',
    },
    title:{
        homePageTitle: 'Automation Exercise',
        productDetailsPage: 'Automation Exercise - Product Details',
        dressPageTitle: 'Automation Exercise - Dress Products',
        dressPageCategory: 'Women - Dress Products',
        tshirtPageTitle: 'Automation Exercise - Tshirts Products',
        tshirtPageCategory: 'Men - Tshirts Products',
        hAndMPageTitle: 'Brand - H&M Products',
        allenSollyPageTitle: 'Brand - Allen Solly Junior Products',
    },
    user:{
        name: 'AK',
        email: 'AkMis27@example.com',
        password: 'Ak@2003',
        day: '27',
        month: 'September',
        year: '2003',
    },
    userAddress:{
        fullName: 'Mr. AK Mishra',
        firstName: 'AK',
        lastName: 'Mishra',
        company: 'CTS',
        firstAdd: 'Hinjewadi phase 1',
        secondAdd: 'Sky heights room no 69',
        country: 'India',
        state: 'Maharashtra',
        city: 'Pune',
        zipcode: '654321',
        mobileNumber: '9876543210',
        cityZipcode: 'Pune Maharashtra 654321'
    },
    successResponse:{
        accCreated: 'Account Created!',
        accDeleted: 'Account Deleted!',
    },
    validUser:{
        name: 'AKM',
        email: 'AKMK27@example.com',
        password: 'Akm@2003',
        subject: 'TestSubject',
        msg: 'TestDescription',
        textFile: './src/resources/Feedback.bmp'
    },
    invalidUser:{
        name: 'invalidName',
        email: 'inValid@example.com',
        password: 'invalid2003',
        
    },
    errorMsg:{
        loginFormError: 'Your email or password is incorrect!',
        signupFormError: 'Email Address already exist!',
    },
    response:{
        uploadSuccess: 'Success! Your details have been submitted successfully.',
        subSuccess: 'You have been successfully subscribed!',
        orderSuccess: 'Order Placed!',
        revSuccess: 'Thank you for your review.',
    },
    products:{
        product1: 'Blue Top',
        product1Price:'Rs. 500',

        product2: 'Men Tshirt',
        producr2Price:'Rs. 400',

        product4: 'Stylish Dress',
        product4Price:'Rs. 1500',

        product5: 'Winter Top',
        producr5Price:'Rs. 600',

        product10: 'Frozen Tops For Kids',
        producr10Price:'Rs. 278',
        
        productPolo: 'Premium Polo T-Shirts',
        productPoloPrice: 'Rs. 1500',

        product3: 'Sleeveless Dress',
        product3Price: 'Rs. 1000',

        searchProductMen: 'Tshirt',
        quantity: '1',
        quantityfx: '',
        quantityDtls: '4',
        totalPrice: 'Rs. 3278',
        totalfx: 'Rs. 2000',
        description: 'Test'
    },
    paymentDetails:{
        name: 'AK Mishra',
        cardNumber: '092720031610',
        cvc:'003',
        expiryMonth:'9',
        expiryYear: '2032'
    }

}
module.exports={data};